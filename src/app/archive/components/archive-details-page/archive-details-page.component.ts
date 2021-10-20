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
    map(([item, currentUser]) => item.users.map((user) => this.getDetective(user, currentUser.name))),
    tap((detectives) => (this.detectives = detectives))
  );

  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Gelöste Fälle', link: '/archive' }];
  archiveQuestions: any[] = [];
  isProcessingCollapsed = true;
  isDiscussionCollapsed = true;
  communityCommentsCount = 5;

  detectives: Detective[] = [];
  user: User;
  case: Item;

  public questions: any[];
  public showQuestions: any[];

  public reviewQuestions: any[] = [];

  //todo: change this somehow :)
  public colors = [
    'color__rating-red',
    'color__rating-tweeter',
    'color__rating-light-green',
    'color__rating-green',
    'color__purple',
    'color__supernova'
  ];

  constructor(private userService: UserService, private loader: LoaderService, private route: ActivatedRoute, private store: Store) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const el: HTMLDivElement = this.overview.nativeElement;
    const run =
      el.offsetTop - 70 < scrollY &&
      scrollY < el.offsetTop + el.parentElement.clientHeight - this.caseFacts.nativeElement.clientHeight - 90;

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

    this.caseFacts.nativeElement.style.top = vertical_position - el.offsetTop + 70 + 'px';
  }

  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  getUserColor() {
    // todo: use localStorage to retrieve color as set by profile-picture.component.split
    // however, that file needs to be adapted to the correct color scheme.
    return this.colors[0];
  }

  getDetective(user: Partial<Detective>, currentUserName?: string): Detective {
    const color = user?.username === currentUserName ? this.getUserColor() : this.getRandomColor();
    return { username: user?.username, level_description: user?.level_description, color };
  }

  getQuestions() {
    const questionsMap = {};

    for (const review of this.case.reviews) {
      for (const question of review.questions) {
        if (!(Object.keys(questionsMap).indexOf(question.question_id) > -1)) {
          questionsMap[question.question_id] = question;
        }
      }
    }

    return Object.values(questionsMap);
  }

  ngOnInit(): void {
    this.loader.show();
    this.userService.user$
      .pipe(
        filter((user) => !!user),
        tap((user) => (this.user = user)),
        switchMap(() => this.route.params),
        switchMap(({ id }) => this.store.dispatch(new GetDetailItem(id)))
      )
      .subscribe(({ archive }) => {
        this.initCase(archive.detailItem);
        this.loader.hide();
      });
  }

  onPostComment(text) {
    this.store.dispatch(new CreateComment(this.case.id, text, this.user.id));
  }

  private initCase(item: Item) {
    const { reviews } = item;
    this.case = item;
    this.questions = reviews[0].questions;
    this.showQuestions = this.questions.filter((question) => !question.parent_question_id);
    this.reviewQuestions = this.getQuestions();
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
}
