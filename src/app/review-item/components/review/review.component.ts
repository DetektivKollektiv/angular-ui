import { Component, HostListener, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items/items.service';
import { Item } from '../../model/item';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { QuestionsService } from '../../services/questions/questions.service';
import { FormGroup } from '@angular/forms';
import { Review } from '../../model/review';
import { ReviewsService } from '../../services/reviews/reviews.service';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user/user.service';
import { Factcheck } from '../../model/factcheck';
import { FactCheckService } from '../../services/factchecks/fact-check.service';
import { UnsavedChanges } from '../../../shared/unsaved-changes/interface/unsaved-changes';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit, UnsavedChanges {
  public caseAccepted: boolean;
  public finished: boolean;
  public part1Finished: boolean;
  public loadingFactCheck = true;

  public caseIndex = 0;
  public form: FormGroup;
  public factCheck: Factcheck;
  public review: Review;
  private openCases: Item[];

  constructor(
    private itemsService: ItemsService,
    private factCheckService: FactCheckService,
    private reviewService: ReviewsService,
    private questionsService: QuestionsService,
    private userService: UserService,
    private matSnackBar: MatSnackBar,
    private loader: LoaderService,
    private router: Router
  ) {}

  get caseToSolve(): Item {
    return this.openCases?.[this.caseIndex];
  }

  ngOnInit(): void {
    this.caseAccepted = false;
    this.finished = false;
    this.part1Finished = false;
    this.getNewCase();
  }

  reject() {
    if (this.caseIndex + 1 >= this.openCases.length) {
      this.caseIndex = 0;
    } else {
      this.caseIndex++;
    }

    this.getFactCheck();
  }

  accept() {
    this.loader.show();
    this.reviewService
      .createReview(this.caseToSolve)
      .then((review) => {
        this.review = review;
        this.caseAccepted = true;
      })
      .catch((reason) => {
        this.matSnackBar.open(
          'Leider konnte der Fall nicht angenommen werden. Versuche es später nochmal.',
          'Ok',
          { duration: 2000 }
        );
      })
      .finally(() => this.loader.hide());
  }

  navigate(url: string) {
    this.router.navigateByUrl(url).then().catch();
  }

  goToFactUrl() {
    if (this.factCheck?.url) {
      window.open(this.factCheck?.url, '_blank');
    }
  }

  isClickable(): boolean {
    return !!this.factCheck?.url;
  }

  setPart1Finished() {
    this.part1Finished = true;
  }

  reviewFinished() {
    this.userService.updateUser();
    this.finished = true;
  }

  hasChanges() {
    return this.caseAccepted && !this.finished;
  }

  @HostListener('window:beforeunload', ['$event'])
  public onPageUnload($event: BeforeUnloadEvent) {
    if (this.hasChanges()) {
      $event.returnValue =
        'Deine Änderungen gehen verloren, wenn du die Seite neu lädst.';
    }
  }

  private getNewCase(): void {
    this.loader.show();
    this.itemsService
      .getOpenItems()
      .then((openCases) => {
        this.openCases = openCases;
        this.getFactCheck();
      })
      .catch((reason) => {
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

  private getFactCheck() {
    if (this.caseToSolve) {
      this.loadingFactCheck = true;
      this.factCheckService
        .getFactCheck(this.caseToSolve.id)
        .then((factCheck) => {
          this.factCheck = factCheck;
        })
        .catch(() => {
          this.factCheck = null;
        })
        .finally(() => {
          this.loader.hide();
          this.loadingFactCheck = false;
        });
    }
  }
}
