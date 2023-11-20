import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '@shared/loader/service/loader.service';
import { UserService } from '../../../core/services/user/user.service';
import { Select, Store } from '@ngxs/store';
import { ArchiveState } from '../../state/archive.state';
import { Observable, OperatorFunction, Subject } from 'rxjs';
import { Item } from '../../../model/item';
import { GetDetailItem, CreateComment } from '../../state/archive.actions';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';
import { filter, map, switchMap, tap, withLatestFrom, takeUntil } from 'rxjs/operators';
import { Detective } from '../../../model/detective';
import { User } from '../../..//core/model/user';
import { Comment } from '../../../model/comment.interface';
import { ItemReview } from '../../../model/item-review';
import { ItemReviewQuestion } from '../../../model/Item-review-question';
import { AuthService } from '@shared/auth/auth-service/auth.service';
import { ViewportScroller } from '@angular/common';
import { ReportItemService } from '../../../core/services/report-item/report-item.service';
import { ReportItemDialogData } from '../../../core/services/report-item/report-item-dialog-data';

@Component({
  selector: 'app-archive-details-page',
  templateUrl: './archive-details-page.component.html',
  styleUrls: ['./archive-details-page.component.scss']
})
export class ArchiveDetailsPageComponent implements OnInit, OnDestroy {
  private destroy$: Subject<any> = new Subject<any>();
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
    map((item) => item.review_comments),
    this.mapComments()
  );
  communityComments$ = this.case$.pipe(
    map((item) => item.discussion_comments),
    this.mapComments(),
    tap(() => (this.commentsLoading = false))
  );
  detectives$ = this.case$.pipe(
    withLatestFrom(this.userService.user$),
    map(([item, currentUser]) => item.users.map((user) => this.getDetective(user, currentUser?.name)))
  );

  authenticated$ = this.authService.auth$.pipe(map((authState) => authState.isLoggedIn));

  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Gelöste Fälle', link: '/archive' }, {label: 'Detail'}];

  archiveQuestions: any[] = [
    {
      title: 'Was bedeutet das Ergebnis?',
      description:
        'Der Score dient als grobe Orientierung. Vertraue diesem nicht blind, sondern befasse dich am besten selbst mit dem Fall.',
      background: 'color__neon-blue',
      icon: 'fal fa-chart-bar'
    },
    {
      title: 'Was bedeuten die Tags?',
      description:
        'Die Tags dienen dazu, einen Fall zu kategorisieren, damit er über die Suche leichter gefunden werden kann.',
      background: 'color__bittersweet',
      icon: 'fal fa-tags'
    },
    {
      title: 'Kann ich kommentieren?',
      description:
        'Ja, unter "Communitydiskussion" können alle angemeldeten User den Fall kommentieren.',
      background: 'color__purple',
      icon: 'fal fa-comments'
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

  commentsLoading = true;

  constructor(
    private userService: UserService,
    private loader: LoaderService,
    private route: ActivatedRoute,
    private store: Store,
    private authService: AuthService,
    private viewportScroller: ViewportScroller,
    private reportItemService: ReportItemService
  ) {}

  @HostListener('unloaded')
  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.loader.show();
    this.userService.user$
      .pipe(
      tap((user) => (this.user = user)),
      switchMap(() => this.route.params),
      switchMap(({ id }) => this.store.dispatch(new GetDetailItem(id))),
      map(({ archive }) => archive.detailItem),
      tap((item) => item.users.forEach((user) => this.getDetective(user, this.user?.name))),
      takeUntil(this.destroy$)
    )
      .subscribe((item: Item) => {
        this.initCase(item);
        this.loader.hide();
      });
  }

  onPostComment(text) {
    this.commentsLoading = true;
    this.store.dispatch(new CreateComment(this.case.id, text, this.user.id));
    // offset of the navigation bar
    this.viewportScroller.setOffset([0, 70]);
    this.viewportScroller.scrollToAnchor('archive-details-discussion-section');
  }

  onReportCase(): void {
    const data: ReportItemDialogData = { type: 'case', itemId: this.case.id, content: this.case.content };
    this.reportItemService.openReportItemDialog(data);
  }

  private initCase(item: Item) {
    const { reviews } = item;
    this.case = item;
    this.initQuestions(reviews);
  }

  private initQuestions(reviews: ItemReview[]) {
    this.allQuestions = [];
    const questionsMap: { [id: string]: ItemReviewQuestion } = {};

    for (const review of reviews) {
      for (const question of review.questions) {
        const q = {
          ...question,
          detective: this.getDetective({ username: review.user }, this.user?.name)
        };
        if (!questionsMap[question.question_id]) {
          questionsMap[question.question_id] = q;
        }
        this.allQuestions.push(q);
      }
    }
    this.displayedQuestions = Object.values(questionsMap).filter((question) => !question.parent_question_id);
  }

  private mapComments(): OperatorFunction<Comment[], Comment[]> {
    return (input$) =>
      input$.pipe(
        withLatestFrom(this.userService.user$),
        map(([comments, user]) =>
          comments.map((comment) => ({ ...comment, detective: this.getDetective({ username: comment.user }, user?.name) }))
        ),
        map((comments) =>
          comments.sort((comment1, comment2) => new Date(comment2.timestamp).getTime() - new Date(comment1.timestamp).getTime())
        )
      );
  }

  private getRandomColor() {
    const { r, g, b } = this.hsvToRgb(0.75, 0.99);
    return `rgb(${r},${g},${b})`;
    // return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private getUserColor() {
    // todo: use localStorage to retrieve color as set by profile-picture.component.split
    // however, that file needs to be adapted to the correct color scheme.
    return '#5f38fa'; //this.colors[0];
  }

  private getDetective(user: Partial<Detective>, currentUserName?: string): Detective {
    let detective = !!user && this.detectives.find((d) => d.username === user.username);
    if (!detective) {
      const color = user?.username === currentUserName ? this.getUserColor() : this.getRandomColor();
      detective = { username: user?.username, level_description: user?.level_description, color };
      this.detectives.push(detective);
    }
    return detective;
  }

  private hsvToRgb(s, v) {
    const golden_ratio_conjugate = 0.618033988749895;
    const h = (Math.random() + golden_ratio_conjugate) % 1;
    const h_i = Math.floor(h * 6);
    const f = h * 6 - h_i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    let rgb;
    switch (h_i) {
      case 0:
        rgb = [v, t, p];
        break;
      case 1:
        rgb = [q, v, p];
        break;
      case 2:
        rgb = [p, v, t];
        break;
      case 3:
        rgb = [p, q, v];
        break;
      case 4:
        rgb = [t, p, v];
        break;
      default:
      case 5:
        rgb = [v, p, q];
    }
    return { r: Math.round(rgb[0] * 256), g: Math.round(rgb[1] * 256), b: Math.round(rgb[2] * 256) };
  }
}
