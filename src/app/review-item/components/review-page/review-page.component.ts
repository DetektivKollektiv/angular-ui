/* eslint-disable max-len */
import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { EMPTY, from, Observable, of, Subscription } from 'rxjs';
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
export class ReviewPageComponent implements OnInit, OnDestroy {
  case$ = from(this.itemsService.getOpenItems()).pipe(
    tap((reviewItems) => (this.isOpenReview = reviewItems.is_open_review)),
    switchMap((reviewItems) => (reviewItems.is_open_review ? this.loadReview(reviewItems) : this.getItemFromRouterState())),
    tap((item) => (this.case = item)),
    tap((item) => this.getFactCheck(item?.id))
  );

  user$ = this.userService.user$;

  breadcrumbLinks: BreadcrumbLink[] = [{label: 'Fall lösen'}];
  case: Item;
  isOpenReview: boolean;
  review: Review;
  questions: Question[];
  showQuestions: Question[];

  questionPrompts = [
    {
      title: 'Ein Link funktioniert nicht mehr?',
      description: 'Wenn sich der Fall nicht mehr bearbeiten lässt, sende uns bitte eine Nachricht über "Fall melden".',
      bgColor: '#3a9832',
      icon: 'fal fa-link'
    },
    {
      title: 'Kann ich die Bearbeitung abbrechen?',
      description: 'Nein, du kannst aber zwei Stunden warten. Dann wird der Fall automatisch abgebrochen und du kannst wieder neue Fälle annehmen.',
      bgColor: '#be9843',
      icon: 'fal fa-hands-helping'
    },
    {
      title: 'Was tun bei einem technischen Fehler?',
      description: 'Schreib bitte eine E-Mail an unser <a href="mailto:support@codetekt.org" target="_blank">Support-Team</a>. Wir helfen dir weiter oder beheben den Fehler.',
      bgColor: '#8f1fff',
      icon: 'fal fa-bug'
    }
  ];

  description_intro =
    'Im Tatbestand unten siehst du alle für den Fall relevanten Informationen. Mache dich zunächst mit dem ' +
    'Fall vertraut und überlege, ob du ihn wirklich bearbeiten willst. Wenn du dich dazu entschlossen hast, ' +
    'klicke bitte auf "Fall bearbeiten" und starte Deine Bewertung.';

  description_review =
    'Du hast die Bearbeitung dieses Falls gestartet. Bitte lies dir alle Aussagen durch und bewerte sie sorgfältig. ' +
    'Zu jeder Aussage gibt es eine Erläuterung und einen Tipp. Beides kann Dir dabei helfen, die am besten geeignete Antwort zu finden. ' +
    'Passt eine Aussage nicht zu dem Fall, dann wähle "Kriterium nicht anwendbar".';
  // 100 XP is always static
  userExperienceBubbles = [
    { iconName: 'star', color: '#fac800', text: '100XP', subText: 'Erfahrung', gridColor: '#160637' }
    // this one was in the designs, but is temporarily removed.
    // { iconName: 'user-cowboy', color: '#fff', text: '3', subText: 'Detektive', gridColor: '#722ED1' }
  ];

  public factCheck: Factcheck = null;

  reviewForm: FormGroup;

  private routerState: { [key: string]: any };
  private formSubscription: Subscription;

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

    this.reviewForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    if (this.case?.id) {
      this.getFactCheck(this.case.id);
    }
  }

  ngOnDestroy(): void {
    this.formSubscription?.unsubscribe();
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
    this.snackBar.open('Du hast noch keinen Fall angenommen. Bitte nimm einen Fall an, um mit der Bearbeitung zu beginnen', '', {
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
    this.showQuestions.forEach((question) => {
      const questionControl = this.formBuilder.control(question.answer_value, Validators.required);
      this.reviewForm.addControl(question.question_id, questionControl);
    });

    this.formSubscription = this.reviewForm.valueChanges.subscribe(() => {
      this.updateReview();
    });
  }

  private handleInvalidForm() {
    this.reviewForm.markAllAsTouched();
    this.snackBar.open(
      'Du kannst die Lösung erst einreichen, wenn du alle Fragen beantwortet hast.',
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
