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


@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss'],
})
export class ReviewPageComponent implements OnInit, UnsavedChanges {
  public caseAccepted: boolean;
  public finished: boolean;
  public openReview: boolean;
  public userExperienceBubbles: any[];
  public case: any;
  public bla: any[];
  public questions: any[];
  public reviewSituation: any;
  public user: any;

  public caseIndex = 0;
  public review: Review;


  public showQuestionaire: boolean;
  public caseId: string = '';
  public shortenedCaseId: string = '';
  private openCases: Item[];

  constructor(
    private itemsService: ItemsService,
    private reviewService: ReviewsService,
    private userService: UserService,
    private matSnackBar: MatSnackBar,
    private loader: LoaderService,
    private dialog: MatDialog,
    private router: Router

  ) {
    this.showQuestionaire = false;
    this.questions = [
      {
        title: "Woran erkenne ich eine gute Quelle?",
        description: "Hier haben wir alles zusammengefasst um dir zu helfen gute Quellen zu erkennen",
        background: "#68a8ff",
        icon: "fal fa-newspaper"
      },
      {
        title: "Die Quelle ist nicht mehr abrufbar. Was kann ich tun?",
        description: "Eine Anleitung für genau solche Fälle findest du auf dieser Seite.",
        background: "#3a9832",
        icon: "fal fa-scroll-old"
      },
      {
        title: "Kann ich den Fall abgeben?",
        description: "Ja, das geht. Hier erfährst du wie.",
        background: "#be9843",
        icon: "fal fa-hands-helping"
      },
      {
        title: "Eine weitere Frage??",
        description: "Und hier ein weiterer Beschreibungstext, der erklärt, was mich beim Klick darauf erwartet.",
        background: "#8f1fff",
        icon: "fal fa-leaf"
      },
    ]

    this.reviewSituation = {
      title: "titel bla",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore https://eine-url.tld magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, www.domainname.tld/eine-seite/ein-artikel-mit-langem-titel m nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    }

    this.userExperienceBubbles = [{ iconName: 'star', color: '#fac800', text: "100xp", subText: 'erfahrung', gridColor: '#160637' },{ iconName: 'user-cowboy', color: '#fff', text: "100xp", subText: 'erfahrung', gridColor: '#722ED1' }];
  }

  get caseToSolve(): Item {
    return this.openCases?.[this.caseIndex];
  }

  @HostListener('window:beforeunload', ['$event'])
  public onPageUnload($event: BeforeUnloadEvent) {
    if (this.hasChanges()) {
      $event.returnValue =
        'Deine Änderungen gehen verloren, wenn du die Seite neu lädst.';
    }
  }

  ngOnInit(): void {
    if (!this.router.url.split('/')[2]) {
      this.router.navigate(['/']);
    } else {
      this.caseId = this.router.url.split('/')[2];
      if(this.caseId){
        this.shortenedCaseId = this.caseId.split('-')[0];
      }
    }

    this.openReview = false;
    this.caseAccepted = false;
    this.finished = false;
    this.getNewCase();

    this.case = {
      id: "123id",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.",
    }
    this.bla = [{
      id: "123id",
      bla: "blaaaa",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.",
    }]

    // this.questions = [
    //   {
    //     title: "Woran erkenne ich eine gute Quelle?",
    //     description: "Hier haben wir alles zusammengefasst um dir zu helfen gute Quellen zu erkennen",
    //     icon: "thing"
    //   },
    //   {
    //     title: "Woran erkenne ich eine gute Quelle?",
    //     description: "Hier haben wir alles zusammengefasst um dir zu helfen gute Quellen zu erkennen",
    //     icon: "thing"
    //   },
    //   {
    //     title: "Woran erkenne ich eine gute Quelle?",
    //     description: "Hier haben wir alles zusammengefasst um dir zu helfen gute Quellen zu erkennen",
    //     icon: "thing"
    //   },
    // ]
    console.log(`questions`, this.questions)
    this.user = { xp: 100 }
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
        this.caseAccepted = true;
      })
      .catch(() => {
        this.matSnackBar.open(
          'Leider konnte der Fall nicht angenommen werden. Versuche es später nochmal.',
          'Ok',
          { duration: 2000 }
        );
      })
      .finally(() => this.loader.hide());
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

  openSignal(): void{
    window.open(globals.signalLink,'_blank');
  }

  private getNewCase(): void {
    this.loader.show();

    this.itemsService
      .getOpenItems()
      .then((openCases) => {
        this.openCases = openCases.items;

        if (openCases.is_open_review) {
          this.openReview = true;

          // this.dialog
          //   .open(OpenReviewDialogComponent)
          //   .afterClosed()
          //   .subscribe((resume) => {
          //     if (resume) {
          //       this.loader.show();

          //       this.reviewService
          //         .createReview(openCases.items[0].id)
          //         .then((review) => {
          //           this.review = review;
          //           this.caseAccepted = true;
          //         })
          //         .finally(() => this.loader.hide());
          //     }
          //   });
        }
      })
      .catch(() => {
        this.matSnackBar.open(
          'Es konnte leider kein neuer Fall geladen werden. Versuche es später nochmal.',
          'Ok',
          { duration: 2000 }
        );
      })
      .finally(() => {
        this.loader.hide();
      });
  }
}
