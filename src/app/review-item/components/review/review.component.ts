import {Component, OnInit} from '@angular/core';
import {CaseService} from '../../services/cases/case.service';
import {Case} from '../../model/case';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LoaderService} from '../../../shared/loader/service/loader.service';
import {QuestionsService} from '../../services/questions/questions.service';
import {Question} from '../../model/question';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Review} from '../../model/review';
import {ReviewsService} from '../../services/reviews/reviews.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  public caseAccepted: boolean;
  public finished: boolean;

  public caseIndex = 0;
  public questions: Question[];

  public form: FormGroup;

  private openCases: Case[];

  constructor(private caseService: CaseService,
              private reviewService: ReviewsService,
              private questionsService: QuestionsService,
              private matSnackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private loader: LoaderService,
              private router: Router) {
  }

  get caseToSolve(): Case {
    return this.openCases?.[this.caseIndex];
  }

  ngOnInit(): void {
    this.caseAccepted = false;
    this.finished = false;
    this.questions = [];

    this.getNewCase();
  }

  reject() {
    if ((this.caseIndex + 1) >= this.openCases.length) {
      this.caseIndex = 0;
    } else {
      this.caseIndex++;
    }
  }

  accept() {
    this.loader.show();

    this.caseService.acceptCase(this.caseToSolve)
      .then(() => {
        this.questionsService.getQuestions().then(questions => {
          this.questions = questions;

          this.form = new FormGroup({});

          this.questions.forEach(question => {
            this.form.addControl(String(question.id), new FormControl('', Validators.required));
          });

          this.caseAccepted = true;
          this.loader.hide();
        });
      })
      .catch(reason => {
        this.matSnackBar.open('Leider konnte der Fall nicht angenommen werden. Versuche es später nochmal.', 'Ok', {duration: 2000});
        console.log(reason);
        this.loader.hide();
      });
  }

  submit() {
    this.loader.show();

    const review = {
      item_id: this.caseToSolve.id,
      is_peer_review: this.caseToSolve.status === 'needs_senior',
      review_answers: []
    } as Review;

    this.questions.forEach(value => review.review_answers.push({review_question_id: value.id, answer: value.score}));

    this.reviewService.submitReview(review)
      .then(() => {
        this.finished = true;
      })
      .catch(() => {
        this.matSnackBar.open('Der Fall konnte leider nicht abgesendet werden, versuche es später nochmal.', 'Ok', {duration: 2000});
      })
      .finally(() => this.loader.hide());
  }

  navigate(url: string) {
    this.router.navigateByUrl(url).then(r => console.log(r));
  }

  private getNewCase(): void {
    this.loader.show();
    this.caseService.getCase()
      .then(openCases => {
        this.openCases = openCases;
      })
      .catch(reason => {
        console.log(reason);
        this.matSnackBar.open('Es konnte leider kein neuer Fall geladen werden. Versuche es später nochmal.', 'Ok', {duration: 2000});
      })
      .finally(() => {
        this.loader.hide();
      });
  }
}
