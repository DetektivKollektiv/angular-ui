import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../model/question';
import {Review} from '../../model/review';
import {QuestionsService} from '../../services/questions/questions.service';
import {LoaderService} from '../../../shared/loader/service/loader.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReviewAnswersService} from '../../services/review-answers/review-answers.service';
import {ReviewAnswer} from '../../model/review-answer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() review: Review;
  @Output() finished = new EventEmitter();

  question: Question;
  form: FormGroup;

  constructor(private questionsService: QuestionsService,
              private reviewAnswersService: ReviewAnswersService,
              private loader: LoaderService,
              private matSnackBar: MatSnackBar,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getNextQuestion();
  }

  getNextQuestion() {
    this.loader.show();

    this.questionsService.getNextQuestion(this.review, this.question)
      .then(value => {

        if (value.success && !value.payload) {
          this.finishReview();
        }

        this.question = value.payload;
        this.form = this.formBuilder.group({
          option: [{}, Validators.required]
        });

      })
      .catch(reason => {
        this.matSnackBar.open('Leider konnte keine neue Frage geladen werden. Versuche es später nochmal.', 'Ok', {duration: 2000});
      })
      .finally(() => this.loader.hide());
  }

  answer() {
    this.loader.show();

    const answer = {
      review_id: this.review.id,
      review_question_id: this.question.id,
      answer: this.form.controls.option.value.value
    } as ReviewAnswer;

    this.reviewAnswersService.createReviewAnswer(answer)
      .then(() => this.getNextQuestion())
      .catch(reason => {
        this.matSnackBar.open('Leider konnte deine Antwort nicht gespeichert werden. Versuche es später nochmal.', 'Ok', {duration: 2000});
      })
      .finally(() => this.loader.hide());
  }

  private finishReview() {
    this.finished.emit();
  }
}
