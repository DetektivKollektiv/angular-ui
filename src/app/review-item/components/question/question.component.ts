import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../../model/question';
import { Review } from '../../model/review';
import { QuestionsService } from '../../services/questions/questions.service';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewAnswersService } from '../../services/review-answers/review-answers.service';
import { ReviewAnswer } from '../../model/review-answer';
import { Option } from '../../model/option';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() review: Review;
  @Output() part1_finished = new EventEmitter();

  question: Question;
  form: FormGroup;
  options: Option[];

  constructor(
    private questionsService: QuestionsService,
    private reviewAnswersService: ReviewAnswersService,
    private loader: LoaderService,
    private matSnackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getNextQuestion();
  }

  getNextQuestion() {
    this.loader.show();

    this.questionsService
      .getNextQuestion(this.review, this.question)
      .then((value) => {
        if (value.success && !value.payload) {
          this.finishPart1();
        }

        this.question = value.payload;

        this.options = this.question.options.sort((a, b) => a.value > b.value ? -1 : 1);
        this.form = this.formBuilder.group({
          option: [null, Validators.required],
        });
      })
      .catch((reason) => {
        this.matSnackBar.open(
          'Leider konnte keine neue Frage geladen werden. Versuche es später nochmal.',
          'Ok',
          { duration: 2000 }
        );
      })
      .finally(() => this.loader.hide());
  }

  answer() {
    this.loader.show();

    const answer = {
      review_id: this.review.id,
      review_question_id: this.question.id,
      answer: this.form.controls.option.value.value,
    } as ReviewAnswer;

    this.reviewAnswersService
      .createReviewAnswer(answer)
      .then(() => this.getNextQuestion())
      .catch((reason) => {
        this.matSnackBar.open(
          'Leider konnte deine Antwort nicht gespeichert werden. Versuche es später nochmal.',
          'Ok',
          { duration: 2000 }
        );
      })
      .finally(() => this.loader.hide());
  }

  private finishPart1() {
    this.part1_finished.emit();
  }
}
