/* eslint-disable max-len */
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../services/items/items.service';
import { Item } from '../../../model/item';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '@shared/loader/service/loader.service';
import { Review } from '../../model/review';
import { ReviewsService } from '../../services/reviews/reviews.service';
import { UserService } from '../../../core/services/user/user.service';
import { UnsavedChanges } from '@shared/unsaved-changes/interface/unsaved-changes';
import { MatDialog } from '@angular/material/dialog';
import { OpenReviewDialogComponent } from '../open-review-dialog/open-review-dialog.component';
import { ReviewState } from '../../model/review-state';
import { globals } from 'src/environments/globals';
import { FactCheckService } from '../../services/factchecks/fact-check.service';
import { Factcheck } from '../../model/factcheck';
import { BreadcrumbLink } from 'src/app/shared/breadcrumb/model/breadcrumb-link.interface';
import { from, Observable, of } from 'rxjs';
import { switchMap, mapTo, tap } from 'rxjs/operators';
import { ReviewItems } from '../../model/review-items';
import { Question } from '../../model/question';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit, UnsavedChanges {
  case$ = from(this.itemsService.getOpenItems()).pipe(
    tap((reviewItems) => (this.isOpenReview = reviewItems.is_open_review)),
    switchMap((reviewItems) => (reviewItems.is_open_review ? this.loadReview(reviewItems) : this.getItemFromRouterState())),
    tap((item) => (this.case = item))
  );

  user$ = this.userService.user$;

  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Fall lösen', link: '/reviews' }];
  case: Item;
  isOpenReview: boolean;
  review: Review;
  questions: Question[];
  showQuestions: Question[];

  finished = false;

  questionPrompts = [
    {
      title: 'Woran erkenne ich eine gute Quelle?',
      description: 'Hier haben wir alles zusammengefasst um dir zu helfen gute Quellen zu erkennen',
      background: '#68a8ff',
      icon: 'fal fa-newspaper'
    },
    {
      title: 'Die Quelle ist nicht mehr abrufbar. Was kann ich tun?',
      description: 'Eine Anleitung für genau solche Fälle findest du auf dieser Seite.',
      background: '#3a9832',
      icon: 'fal fa-scroll-old'
    },
    {
      title: 'Kann ich den Fall abgeben?',
      description: 'Ja, das geht. Hier erfährst du wie.',
      background: '#be9843',
      icon: 'fal fa-hands-helping'
    },
    {
      title: 'Eine weitere Frage??',
      description: 'Und hier ein weiterer Beschreibungstext, der erklärt, was mich beim Klick darauf erwartet.',
      background: '#8f1fff',
      icon: 'fal fa-leaf'
    }
  ];

  // 100 XP is always static
  userExperienceBubbles = [
    { iconName: 'star', color: '#fac800', text: '100XP', subText: 'Erfahrung', gridColor: '#160637' }
    // this one was in the designs, but is temporarily removed.
    // { iconName: 'user-cowboy', color: '#fff', text: '3', subText: 'Detektive', gridColor: '#722ED1' }
  ];

  public factCheck: Factcheck = null;
  public policyChecked = false;
  public conditionChecked = false;
  public buttonStatus = true;

  private routerState: { [key: string]: any };

  constructor(
    private itemsService: ItemsService,
    private reviewsService: ReviewsService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private loader: LoaderService,
    private router: Router,
    private factCheckService: FactCheckService
  ) {
    this.routerState = this.router.getCurrentNavigation().extras?.state;
  }

  @HostListener('window:beforeunload', ['$event'])
  public onPageUnload($event: BeforeUnloadEvent) {
    if (this.hasChanges()) {
      $event.returnValue = 'Deine Änderungen gehen verloren, wenn du die Seite neu lädst.';
    }
  }

  ngOnInit(): void {
    if (this.case?.id) {
      this.getFactCheck(this.case.id);
    }
  }

  accept() {
    this.loader.show();
    this.reviewsService
      .createReview(this.case.id)
      .then((review) => {
        this.initReview(review);
        this.isOpenReview = true;
      })
      .catch(() => {
        this.snackBar.open('Leider konnte der Fall nicht angenommen werden. Versuche es später nochmal.', 'Ok', { duration: 2000 });
      })
      .finally(() => this.loader.hide());
  }

  doAnUpdate() {
    this.reviewsService.updateReview(this.review).then(() => {});
  }

  closeReview() {
    this.review.status = ReviewState[ReviewState.closed];

    this.reviewsService.updateReview(this.review).then(() => {
      this.userService.updateUser();
      this.finished = true;
    });
  }

  hasChanges() {
    return this.isOpenReview && !this.finished;
  }

  openSignal(): void {
    window.open(globals.signalLink, '_blank');
  }

  change(e) {
    //
  }

  getFactCheck(id: string): void {
    this.loader.show();

    this.factCheckService
      .getFactCheck(id)
      .then((factCheck) => {
        this.factCheck = factCheck;
      })
      .catch(() => {
        this.factCheck = null;
      })
      .finally(() => {
        this.loader.hide();
      });
  }

  updateReview() {
    this.reviewsService.updateReview(this.review);
  }

  async submitTags() {
    await this.itemsService.setItemTags(this.case.id, []);
  }

  commentChange(comment: string) {
    if (comment === this.review.comment) {
      return;
    }
    this.review.comment = comment;
    this.reviewsService.updateReview(this.review);
  }

  onTagsChanged(tags: string[]) {
    // TODO: save tags
  }

  agreePolicy(event) {
    this.policyChecked = event.checked;
    this.checkButtonStatus();
  }

  agreeCondition(event) {
    this.conditionChecked = event.checked;
    this.checkButtonStatus();
  }

  checkButtonStatus() {
    if (this.policyChecked === true && this.conditionChecked === true) {
      this.buttonStatus = false;
    } else {
      this.buttonStatus = true;
    }
  }

  private getItemFromRouterState(): Observable<Item> {
    if (!this.routerState) {
      this.snackBar.open('Du hast noch keinen Fall angenommen. Bitte nimm einen Fall an, um mit dem Review zu beginnen', '', {
        duration: 5000
      });
      this.router.navigate(['/']);
      return of(null);
    }

    const { item } = this.routerState;
    return of(item);
  }

  private loadReview(reviewItems: ReviewItems) {
    const item = reviewItems.items[0];
    return from(this.reviewsService.createReview(item.id)).pipe(
      tap((review) => this.initReview(review)),
      mapTo(item)
    );
  }

  private initReview(review: Review) {
    this.review = review;
    this.questions = review.questions;
    this.showQuestions = this.questions.filter((question) => !question.parent_question_id);
  }
}
