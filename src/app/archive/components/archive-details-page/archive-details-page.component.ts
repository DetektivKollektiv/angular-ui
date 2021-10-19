import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { UserService } from '../../../core/services/user/user.service';
import { Select, Store } from '@ngxs/store';
import { ArchiveState } from '../../state/archive.state';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
import { GetDetailItem, CreateComment } from '../../state/archive.actions';
import { BreadcrumbLink } from 'src/app/shared/breadcrumb/model/breadcrumb-link.interface';
import { ItemReview } from 'src/app/model/item-review.interface';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { Detective } from 'src/app/core/model/detective';

@Component({
  selector: 'app-archive-details-page',
  templateUrl: './archive-details-page.component.html',
  styleUrls: ['./archive-details-page.component.scss']
})
export class ArchiveDetailsPageComponent implements OnInit {
  @Select(ArchiveState.filteredItems) items$: Observable<Item[]>;
  @Select(ArchiveState.detailItem) detailItem$!: Observable<Item>;
  @Select(ArchiveState.responsesPercentages) answerPercentages$: Observable<{ [key: string]: number }>;

  case$ = this.detailItem$.pipe(filter((item) => !!item));

  givenResponsesPercentages$ = this.store
    .select(ArchiveState.filteredResponsesPercentages)
    .pipe(map((fn) => fn(this.answers, (count) => count > 0)));
  notGivenResponsesPercentages$ = this.store
    .select(ArchiveState.filteredResponsesPercentages)
    .pipe(map((fn) => fn(this.answers, (count) => !count)));
  noCriteriaResponsesPercentage$ = this.store.select(ArchiveState.filteredResponsesPercentages).pipe(
    map((fn) => fn([this.criteriaNotApplicableAnswer])),
    map((responses) => responses[0])
  );
  caseDuration$ = this.case$.pipe(
    map((item) => {
      const start = new Date(item.open_timestamp);
      const end = new Date(item.close_timestamp);
      return Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
    })
  );
  reviewComments$ = this.case$.pipe(
    map((item) => item.comments.filter((comment) => comment.is_review_comment === 'True')),
    map((comments) => this.fillUserInfo(comments))
  );
  communityComments$ = this.case$.pipe(
    map((item) => item.comments.filter((comment) => comment.is_review_comment === 'False')),
    map((comments) => this.fillUserInfo(comments))
  );

  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Gelöste Fälle', link: '/archive' }];
  archiveQuestions: any[] = [];
  isProcessingCollapsed = true;
  isDiscussionCollapsed = true;
  communityCommentsCount = 5;

  user: any;
  case: Item;

  public questions: any[];
  public showQuestions: any[];

  public reviewQuestions: any[] = [];

  public detectives: Detective[] = [];

  //todo: change this somehow :)
  public colors = [
    'color__rating-red',
    'color__rating-tweeter',
    'color__rating-light-green',
    'color__rating-green',
    'color__purple',
    'color__supernova'
  ];

  private criteriaNotApplicableAnswer = 'Kriterium nicht anwendbar';
  private answers: string[] = ['Stimme zu', 'Stimme eher zu', 'Stimme eher nicht zu', 'Stimme nicht zu'];

  constructor(private userService: UserService, private loader: LoaderService, private route: ActivatedRoute, private store: Store) {}

  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  getUserColor() {
    // todo: use localStorage to retrieve color as set by profile-picture.component.split
    // however, that file needs to be adapted to the correct color scheme.
    return this.colors[0];
  }

  getDetective(userName: string): Detective {
    const user = userName.trim().toLowerCase() === 'deleted' ? 'Deaktiviert' : userName;

    let detective = this.detectives.find((d) => d.user === user);
    if (detective) {
      return detective;
    }

    const color = userName === this.user.name ? this.getUserColor() : this.getRandomColor();
    const avatarCharacter = userName === 'deleted' ? '?' : userName[0].toUpperCase();
    detective = { user, color, avatarCharacter };
    this.detectives.push(detective);
    return detective;
  }

  setDetectives(reviews: ItemReview[]): void {
    reviews.forEach((review) => this.getDetective(review.user));
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
    this.store.dispatch(new CreateComment(this.case.id, text, this.user.id)).subscribe(({ result }) => {});
  }

  private initCase(item: Item) {
    const { reviews } = item;
    this.case = item;
    this.questions = reviews[0].questions;
    this.showQuestions = this.questions.filter((question) => !question.parent_question_id);
    this.reviewQuestions = this.getQuestions();
    this.setDetectives(reviews);
  }

  private fillUserInfo(comments: any[]): any[] {
    return comments.map((comment) => {
      const { color, avatarCharacter } = this.getDetective(comment.user);
      return { ...comment, color, avatarCharacter };
    });
  }
}
