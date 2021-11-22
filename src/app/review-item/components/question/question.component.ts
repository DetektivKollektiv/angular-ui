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

  @Output() valueChange = new EventEmitter();

  isShowChild: boolean;
  childQuestions: ItemReviewQuestion[] = [];
  visibleChildQuestions: ItemReviewQuestion[] = [];
  title: string;
  questionForm: FormControl;

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

  addChildQuestions(): void {
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

  showChildQuestions(value): void {
    if (value === null || value === undefined) {
      return;
    }

    this.visibleChildQuestions = [];
    this.isShowChild = false;

    const questions = this.questions.filter((q) => q.question_id === this.question.question_id);

    this.childQuestions.forEach((question) => {
      const valueInBound = questions.find((q) => question.lower_bound <= q.answer_value && question.upper_bound >= q.answer_value);
      // const valueInBound = question.lower_bound <= value && question.upper_bound >= value;

      if (valueInBound) {
        this.isShowChild = true;
        this.visibleChildQuestions.push(question);
      }
    });
  }

  onQuestionValueChange(e: number): void {
    this.valueChange.emit();
    this.showChildQuestions(e);
  }

  private handleQuestionForm(): void {
    if (!this.parentFormGroup) {
      return;
    }

    this.questionForm = this.formBuilder.control(this.question.answer_value, Validators.required);
    this.parentFormGroup.addControl(this.question.question_id, this.questionForm);

    this.formSubscription = this.questionForm.valueChanges.pipe().subscribe((value) => {
      this.question.answer_value = value;
      this.onQuestionValueChange(value);
    });
  }
}
