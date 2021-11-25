/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../../services/items/items.service';
import { Item } from '../../../model/item';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '@shared/loader/service/loader.service';
import { Review } from '../../model/review';
import { ReviewsService } from '../../services/reviews/reviews.service';
import { UserService } from '../../../core/services/user/user.service';
import { ReviewState } from '../../model/review-state';
import { globals } from 'src/environments/globals';
import { FactCheckService } from '../../services/factchecks/fact-check.service';
import { Factcheck } from '../../../model/factcheck';
import { BreadcrumbLink } from 'src/app/shared/breadcrumb/model/breadcrumb-link.interface';
import { EMPTY, from, Observable, of } from 'rxjs';
import { switchMap, mapTo, tap } from 'rxjs/operators';
import { ReviewItems } from '../../model/review-items';
import { Question } from '../../model/question';
import { ReportItemService } from '../../../core/services/report-item/report-item.service';
import { ReportItemDialogData } from '../../../core/services/report-item/report-item-dialog-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit {
  case$ = from(this.itemsService.getOpenItems()).pipe(
    tap((reviewItems) => (this.isOpenReview = reviewItems.is_open_review)),
    switchMap((reviewItems) => (reviewItems.is_open_review ? this.loadReview(reviewItems) : this.getItemFromRouterState())),
    tap((item) => (this.case = item)),
    tap((item) => this.getFactCheck(item?.id))
  );

  user$ = this.userService.user$;

  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Fall lösen', link: '/reviews' }];
  case: Item;
  isOpenReview: boolean;
  review: Review;
  questions: Question[];
  showQuestions: Question[];

  finished = false;
  isPolicyChecked = false;
  isConditionChecked = false;
  reviewChanged = false;

  questionPrompts = [
    {
      title: 'Woran erkenne ich eine gute Quelle?',
      description: 'Hier haben wir alles zusammengefasst um dir zu helfen gute Quellen zu erkennen',
      bgColor: '#68a8ff',
      icon: 'fal fa-newspaper'
    },
    {
      title: 'Die Quelle ist nicht mehr abrufbar. Was kann ich tun?',
      description: 'Eine Anleitung für genau solche Fälle findest du auf dieser Seite.',
      bgColor: '#3a9832',
      icon: 'fal fa-scroll-old'
    },
    {
      title: 'Kann ich den Fall abgeben?',
      description: 'Ja, das geht. Hier erfährst du wie.',
      bgColor: '#be9843',
      icon: 'fal fa-hands-helping'
    },
    {
      title: 'Eine weitere Frage??',
      description: 'Und hier ein weiterer Beschreibungstext, der erklärt, was mich beim Klick darauf erwartet.',
      bgColor: '#8f1fff',
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

  reviewForm: FormGroup;

  private routerState: { [key: string]: any };

  constructor(
    private itemsService: ItemsService,
    private reviewsService: ReviewsService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private loader: LoaderService,
    private router: Router,
    private factCheckService: FactCheckService,
    private reportItemService: ReportItemService,
    private formBuilder: FormBuilder,
    private viewportScroller: ViewportScroller
  ) {
    this.routerState = this.router.getCurrentNavigation().extras?.state;

    this.reviewForm = this.formBuilder.group({
      legal: [false, Validators.requiredTrue],
      policy: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    if (this.case?.id) {
      this.getFactCheck(this.case.id);
    }
  }

  accept() {
    this.loader.show();
    this.reviewsService.createReview(this.case.id).subscribe(
      (review) => {
        this.initReview(review);
        this.isOpenReview = true;
      },
      () => {
        this.snackBar.open('Leider konnte der Fall nicht angenommen werden. Versuche es später nochmal.', 'Ok', { duration: 2000 });
      },
      () => this.loader.hide()
    );
  }

  closeReview() {
    if (this.reviewForm.invalid) {
      this.handleInvalidForm();
      return;
    }

    this.review.status = ReviewState[ReviewState.closed];

    this.reviewsService.updateReview(this.review).subscribe(() => {
      this.userService.updateUser();
      this.isOpenReview = false;
      this.router.navigate(['review', 'success'], { state: { item: this.case } });
    });
  }

  openSignal(): void {
    window.open(globals.signalLink, '_blank');
  }

  updateReview() {
    this.reviewsService.updateReview(this.review);
    this.reviewChanged = true;
  }

  commentChange(comment: string) {
    if (comment === this.review.comment) {
      return;
    }
    this.review.comment = comment?.trim().length ? comment : null;
    this.updateReview();
  }

  onTagsChanged(tags: string[]) {
    this.review.tags = tags?.length ? tags : null;
    this.updateReview();
  }

  onReportCase(): void {
    const data: ReportItemDialogData = { type: 'case', itemId: this.case.id, content: this.case.content };
    this.reportItemService.openReportItemDialog(data);
  }

  private getFactCheck(id: string): void {
    from(this.factCheckService.getFactCheck(id)).subscribe((factcheck) => (this.factCheck = factcheck));
  }

  private getItemFromRouterState(): Observable<Item | never> {
    if (!this.routerState) {
      return this.navigateOnNoReview();
    }

    const { item } = this.routerState;
    return of(item);
  }

  private navigateOnNoReview(): Observable<never> {
    this.snackBar.open('Du hast noch keinen Fall angenommen. Bitte nimm einen Fall an, um mit dem Review zu beginnen', '', {
      duration: 5000
    });
    this.router.navigate(['/']);
    return EMPTY;
  }

  private loadReview(reviewItems: ReviewItems) {
    return this.reviewsService.getOpenReview().pipe(
      tap((review) => this.initReview(review)),
      mapTo(reviewItems.items[0])
    );
  }

  private initReview(review: Review) {
    this.review = review;
    this.questions = [...review.questions];
    this.questions.sort((q1, q2) => q1.question_id.localeCompare(q2.question_id));
    this.showQuestions = this.questions.filter((question) => !question.parent_question_id);
  }

  private handleInvalidForm() {
    this.reviewForm.markAllAsTouched();
    this.snackBar.open(
      'Du kannst die Lösung erst einreichen, wenn du alle Fragen beantwortet hast und der Datenschutzerklärung, sowie den Nutzungsbedingungen zugestimmt hast.',
      '',
      { duration: 5000 }
    );
    const unansweredQuestion = this.questions
      .filter((question) => question.answer_value === null)
      .find((question) => document.getElementById(question.question_id));
    if (unansweredQuestion) {
      this.viewportScroller.setOffset([0, 80]);
      this.viewportScroller.scrollToAnchor(unansweredQuestion.question_id);
    }
  }
}
