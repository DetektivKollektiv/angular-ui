/* eslint-disable max-len */
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../../services/items/items.service';
import { Item } from '../../model/item';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { Review } from '../../model/review';
import { ReviewsService } from '../../services/reviews/reviews.service';
import { UserService } from '../../../core/services/user/user.service';
import { UnsavedChanges } from '../../../shared/unsaved-changes/interface/unsaved-changes';
import { MatDialog } from '@angular/material/dialog';
import { OpenReviewDialogComponent } from '../open-review-dialog/open-review-dialog.component';
import { ReviewState } from '../../model/review-state';
import { globals } from 'src/environments/globals';
import { FactCheckService } from '../../services/factchecks/fact-check.service';
import { Factcheck } from '../../model/factcheck';
import { BreadcrumbLink } from 'src/app/shared/breadcrumb/model/breadcrumb-link.interface';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit, UnsavedChanges {
  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Fall lösen', link: '/reviews' }];

  public caseAccepted: boolean;
  public finished: boolean;
  public openReview: boolean;
  public userExperienceBubbles: any[];
  public case: any;
  public questionPrompts: any[];
  public questions: any[];

  public staticQuestions: any[];

  public showQuestions: any[];
  public reviewSituation: any;
  public user: any;
  public userInfo: any;
  public defaultValue: null;

  public caseIndex = 0;
  public review: Review;

  public showQuestionaire: boolean;

  //   public caseId: string = null;
  //   public shortenedCaseId: string = null;

  public caseId = '';
  public shortenedCaseId = '';

  public factCheck: Factcheck = null;
  public comment = '';
  public policyChecked = false;
  public conditionChecked = false;
  public buttonStatus = true;

  private openCases: Item[];

  constructor(
    private itemsService: ItemsService,
    private reviewService: ReviewsService,
    private userService: UserService,
    private matSnackBar: MatSnackBar,
    private loader: LoaderService,
    private dialog: MatDialog,
    private router: Router,
    private factCheckService: FactCheckService
  ) {
    this.showQuestionaire = false;

    this.questionPrompts = [
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

    this.reviewSituation = {
      title: 'Der Tatbestand',
      text: '',
      open_timesteamp: '01.01.0001'
      //urls: {"https://eine-url.tld", "https://eine-url.tld","https://eine-url.tld","https://eine-url.tld"},
      //tags:{ "4444444444",  "4444444444", "4444444444" , "4444444444"},
    };
    // 100 XP is always static

    this.userExperienceBubbles = [
      { iconName: 'star', color: '#fac800', text: '100xp', subText: 'erfahrung', gridColor: '#160637' }
      // this one was in the designs, but is temporarily removed.
      // { iconName: 'user-cowboy', color: '#fff', text: '3', subText: 'Detektive', gridColor: '#722ED1' }
    ];
  }

  get caseToSolve(): Item {
    return this.openCases?.[this.caseIndex];
  }

  @HostListener('window:beforeunload', ['$event'])
  public onPageUnload($event: BeforeUnloadEvent) {
    if (this.hasChanges()) {
      $event.returnValue = 'Deine Änderungen gehen verloren, wenn du die Seite neu lädst.';
    }
  }

  ngOnInit(): void {
    if (!this.router.url.split('/')[2]) {
      this.router.navigate(['/']);
    } else {
      this.caseId = this.router.url.split('/')[2];
      if (this.caseId) {
        this.shortenedCaseId = this.caseId.split('-')[0];
      }
    }

    this.openReview = false;
    this.caseAccepted = false;
    this.finished = false;
    this.getNewCase();

    this.user = { xp: 100 };

    this.userService.user$.subscribe((user: any) => {
      this.userInfo = user;
    });

    if (this.caseId) {
      this.getFactCheck(this.caseId);
    }
  }

  reject() {
    if (this.caseIndex + 1 >= this.openCases.length) {
      this.caseIndex = 0;
    } else {
      this.caseIndex++;
    }
  }

  accept() {
    this.loader.show();
    this.reviewService
      .createReview(this.caseToSolve.id)
      .then((review) => {
        this.review = review;
        this.questions = review.questions;
        this.showQuestions = this.questions.filter((question) => !question.parent_question_id);
        this.caseAccepted = true;
      })
      .catch(() => {
        this.matSnackBar.open('Leider konnte der Fall nicht angenommen werden. Versuche es später nochmal.', 'Ok', { duration: 2000 });
      })
      .finally(() => this.loader.hide());
  }
  doAnUpdate() {
    this.reviewService.updateReview(this.review).then(() => {});
  }

  closeReview() {
    this.review.status = ReviewState[ReviewState.closed];

    this.reviewService.updateReview(this.review).then(() => {
      this.userService.updateUser();
      this.finished = true;
    });
  }

  hasChanges() {
    return this.caseAccepted && !this.finished;
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
    this.reviewService.updateReview(this.review);
  }

  async submitTags() {
    await this.itemsService.setItemTags(this.caseId, []);
  }

  commentChange() {
    this.review.comment = this.comment;
    this.reviewService.updateReview(this.review);
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

  private getNewCase(): void {
    this.loader.show();

    this.itemsService
      .getOpenItems()
      .then((openCases) => {
        this.openCases = openCases.items;
        const firstCase = openCases.items[0];

        const sampleTags = ['tag1', 'tag2', 'really long tag here'];
        const sampleUrls = [
          { url: 'reddit.com', is_safe: true },
          { url: 'otherwebsite.io', is_safe: true },
          { url: 'thisismyfavorite.com', is_safe: false }
        ];

        this.case = {
          ...firstCase,
          tags: 'tags' in firstCase && Array.isArray(firstCase?.tags) ? firstCase?.tags : sampleTags,
          urls: 'urls' in firstCase && Array.isArray(firstCase?.urls) ? firstCase?.urls : sampleUrls
          // urls: sampleUrls,
          // tags: sampleTags,
        };

        this.reviewSituation.text = this.case.content;

        if (openCases.is_open_review) {
          this.openReview = true;

          this.reviewService.createReview(firstCase.id).then((review) => {
            this.review = review;
            this.questions = review.questions;
            this.showQuestions = this.questions.filter((question) => !question.parent_question_id);
            this.caseAccepted = true;
          });

          /*
          this.dialog
            .open(OpenReviewDialogComponent)
            .afterClosed()
            .subscribe((resume) => {
              if (resume) {
                this.loader.show();

                this.reviewService
                  .createReview(openCases.items[0].id)
                  .then((review) => {
                    this.review = review;
                    this.questions = review.questions
                    this.showQuestions = this.questions.filter(question => !question.parent_question_id)
                    this.caseAccepted = true;
                  })
                  .finally(() => this.loader.hide());
              }
            });
            */
        }
      })
      .catch(() => {
        this.matSnackBar.open('Es konnte leider kein neuer Fall geladen werden. Versuche es später nochmal.', 'Ok', { duration: 2000 });
      })
      .finally(() => {
        this.loader.hide();
      });
  }
}
