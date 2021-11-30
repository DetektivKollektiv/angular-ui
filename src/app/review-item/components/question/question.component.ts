import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ItemReviewQuestion } from '../../../model/Item-review-question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {
  @Input() question: ItemReviewQuestion;
  @Input() questions: ItemReviewQuestion[];
  @Input() index: number;
  @Input() isChild: boolean;
  @Input() displayOnly: boolean;
  @Input() parentIndex = -1;
  @Input() parentFormGroup: FormGroup;

  isShowChild: boolean;
  childQuestions: ItemReviewQuestion[] = [];
  visibleChildQuestions: ItemReviewQuestion[] = [];
  title: string;
  questionFormControl: FormControl;

  private alphbt = 'abcdefghijklmnopqrstuvwxyz';
  private formSubscription: Subscription;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const index = this.parentIndex === -1 ? `${this.index + 1}` : `${this.parentIndex + 1}${this.alphbt[this.index]}`;
    this.title = `Frage ${index}`;
    this.handleQuestionForm();

    this.isShowChild = false;

    this.addChildQuestions();
    this.showChildQuestions(this.question.answer_value);
  }

  ngOnDestroy(): void {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }

  showChildQuestions(value): void {
    if (value === null || value === undefined) {
      return;
    }

    this.visibleChildQuestions = [];
    this.isShowChild = false;

    const questions = this.questions.filter((q) => q.question_id === this.question.question_id);

    this.childQuestions.forEach((question) => {
      const valueInBound = questions.find((q) => question.lower_bound <= q.answer_value && question.upper_bound >= q.answer_value);

      if (valueInBound) {
        this.isShowChild = true;
        this.visibleChildQuestions.push(question);

        this.addFormControl(question);
      } else {
        this.removeFormControl(question);
      }
    });
  }

  private addFormControl(question: ItemReviewQuestion) {
    if (!this.parentFormGroup) {
      return;
    }

    const childQuestionControl = this.formBuilder.control(question.answer_value, Validators.required);
    this.parentFormGroup.addControl(question.question_id, childQuestionControl);
  }

  private removeFormControl(question: ItemReviewQuestion) {
    question.answer_value = null;
    this.parentFormGroup.removeControl(question.question_id);
  }

  private addChildQuestions(): void {
    const hasChildren = this.question.max_children > 0;
    if (!hasChildren) {
      return;
    }
    this.questions.forEach((question) => {
      if (
        question.parent_question_id === this.question.question_id &&
        !this.childQuestions.find((q) => q.question_id === question.question_id)
      ) {
        this.childQuestions.push(question);
      }
    });
  }

  private handleQuestionForm(): void {
    if (!this.parentFormGroup) {
      return;
    }

    this.questionFormControl = this.parentFormGroup.get(this.question.question_id) as FormControl;

    this.formSubscription = this.questionFormControl.valueChanges.pipe().subscribe((value) => {
      this.question.answer_value = value;
      this.showChildQuestions(value);
    });
  }
}
