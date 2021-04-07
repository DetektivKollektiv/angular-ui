import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../model/question';

@Component({
  selector: 'app-review-question',
  templateUrl: './review-question.component.html',
  styleUrls: ['./review-question.component.scss'],
})
export class ReviewQuestionComponent {
  @Input() public question: Question;
  @Input() public childQuestions: Question[];
  @Input() public index: number;

  @Output() questionAnswered = new EventEmitter();

  public get valid(): boolean {
    return (
      this.question.answer_value !== null &&
      this.childQuestions
        .filter(
          (cq) =>
            cq.lower_bound <= this.question.answer_value &&
            cq.upper_bound >= this.question.answer_value
        )
        .every((cq) => cq.answer_value !== null)
    );
  }

  parentValueChanged() {
    this.childQuestions
      .filter(
        (cq) =>
          this.question.answer_value <= cq.lower_bound ||
          this.question.answer_value >= cq.upper_bound
      )
      .forEach((cq) => (cq.answer_value = null));
  }

  answerQuestion() {
    this.questionAnswered.emit();
  }
}
