import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '@shared/loader/service/loader.service';
import { UserService } from '../../../core/services/user/user.service';
import { Select, Store } from '@ngxs/store';
import { ArchiveState } from '../../state/archive.state';
import { Observable, OperatorFunction } from 'rxjs';
import { Item } from '../../../model/item';
import { GetDetailItem, CreateComment } from '../../state/archive.actions';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Detective } from '../../../model/detective';
import { CaseFactsComponent } from '@shared/case-facts/case-facts/case-facts.component';
import { User } from '../../..//core/model/user';
import { Comment } from '../../../model/comment.interface';
import { ItemReview } from '../../../model/item-review';
import { ItemReviewQuestion } from '../../../model/Item-review-question';
import { AuthService } from '@shared/auth/auth-service/auth.service';

@Component({
  selector: 'app-archive-details-page',
  templateUrl: './archive-details-page.component.html',
  styleUrls: ['./archive-details-page.component.scss']
})
export class ArchiveDetailsPageComponent implements OnInit {
  @ViewChild(CaseFactsComponent, { read: ElementRef }) caseFacts: ElementRef;
  @ViewChild('overview', { read: ElementRef }) overview: ElementRef;

  @Select(ArchiveState.filteredItems) items$: Observable<Item[]>;
  @Select(ArchiveState.detailItem) detailItem$!: Observable<Item>;
  case$ = this.detailItem$.pipe(filter((item) => !!item));

  caseDuration$ = this.case$.pipe(
    map((item) => {
      const start = new Date(item.open_timestamp);
      const end = new Date(item.close_timestamp);
      return Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
    })
  );
  reviewComments$ = this.case$.pipe(
    map((item) => item.comments.filter((comment) => comment.is_review_comment === 'True')),
    this.mapComments()
  );
  communityComments$ = this.case$.pipe(
    map((item) => item.comments.filter((comment) => comment.is_review_comment === 'False')),
    this.mapComments()
  );
  detectives$ = this.case$.pipe(
    withLatestFrom(this.userService.user$),
    map(([item, currentUser]) => item.users.map((user) => this.getDetective(user, currentUser?.name))),
    tap((detectives) => (this.detectives = detectives))
  );

  authenticated$ = this.authService.auth$.pipe(map((authState) => authState.isLoggedIn));

  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Gelöste Fälle', link: '/archive' }];
  archiveQuestions: any[] = [
    {
      title: 'Wie errechnet sich der Score?',
      description: 'Eine Anleitung für genau solche Fälle findest du auf dieser Seite.',
      background: 'color__neon-blue',
      icon: 'fal fa-chart-bar'
    }
  ];

  isProcessingCollapsed = true;
  isDiscussionCollapsed = true;
  communityCommentsCount = 5;

  detectives: Detective[] = [];
  user: User;
  case: Item;

  displayedQuestions: any[];
  allQuestions: any[] = [];

  //todo: change this somehow :)
  private colors = [
    'color__rating-red',
    'color__rating-tweeter',
    'color__rating-light-green',
    'color__rating-green',
    'color__purple',
    'color__supernova'
  ];

  constructor(
    private userService: UserService,
    private loader: LoaderService,
    private route: ActivatedRoute,
    private store: Store,
    private authService: AuthService
  ) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.overview?.nativeElement || !this.caseFacts?.nativeElement) {
      return;
    }
    const factsEl: HTMLDivElement = this.caseFacts.nativeElement;
    const el: HTMLDivElement = this.overview.nativeElement;

    const run = el.offsetTop - 70 < scrollY && scrollY < el.offsetTop + el.parentElement.clientHeight - factsEl.clientHeight - 90;

    if (!run) {
      return;
    }

    let vertical_position = 0;
    if (scrollY) {
      vertical_position = scrollY;
    } else if (document.documentElement.clientHeight) {
      vertical_position = document.documentElement.scrollTop;
    } else if (document.body) {
      vertical_position = document.body.scrollTop;
    }

    factsEl.style.top = vertical_position - el.offsetTop + 70 + 'px';
  }

  ngOnInit(): void {
    this.loader.show();
    this.userService.user$
      .pipe(
        tap((user) => (this.user = user)),
        switchMap(() => this.route.params),
        switchMap(({ id }) => this.store.dispatch(new GetDetailItem(id)))
      )
      .subscribe(({ archive }) => {
        this.initCase(archive.detailItem);
        this.loader.hide();
      });
  }

  initQuestions(reviews: ItemReview[]) {
    this.allQuestions = [];
    const questionsMap: { [id: string]: ItemReviewQuestion } = {};

    for (const review of reviews) {
      for (const question of review.questions) {
        const q = {
          ...question,
          detective: this.detectives.find((detective) => detective.username === review.user)
        };
        if (!questionsMap[question.question_id]) {
          questionsMap[question.question_id] = q;
        }
        this.allQuestions.push(q);
      }
    }
    this.displayedQuestions = Object.values(questionsMap).filter((question) => !question.parent_question_id);
  }

  onPostComment(text) {
    this.store.dispatch(new CreateComment(this.case.id, text, this.user.id));
  }

  private initCase(item: Item) {
    const { reviews } = item;
    this.case = item;
    this.initQuestions(reviews);
  }

  private mapComments(): OperatorFunction<Comment[], Comment[]> {
    return (input$) =>
      input$.pipe(
        map((comments) =>
          comments.sort((comment1, comment2) => new Date(comment1.timestamp).getTime() - new Date(comment2.timestamp).getTime())
        ),
        withLatestFrom(this.userService.user$),
        map(([comments, user]) =>
          comments.map((comment) => ({ ...comment, detective: this.getDetective({ username: comment.user }, user?.name) }))
        )
      );
  }

  private getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private getUserColor() {
    // todo: use localStorage to retrieve color as set by profile-picture.component.split
    // however, that file needs to be adapted to the correct color scheme.
    return this.colors[0];
  }

  private getDetective(user: Partial<Detective>, currentUserName?: string): Detective {
    const color = user?.username === currentUserName ? this.getUserColor() : this.getRandomColor();
    return { username: user?.username, level_description: user?.level_description, color };
  }
}
