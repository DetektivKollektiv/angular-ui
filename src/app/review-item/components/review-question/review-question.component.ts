import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../model/question';

function assertNever(value: never): never {
  throw new Error(`Unhandled field type: ${JSON.stringify(value)}`);
}

@Component({
  selector: 'app-review-question',
  templateUrl: './review-question.component.html',
  styleUrls: ['./review-question.component.scss']
})
export class ReviewQuestionComponent {
  @Input() public question: Question;
  @Input() public childQuestions: Question[];
  @Input() public index: number;

  @Output() questionAnswered = new EventEmitter();

  public get valid(): boolean {
    if (!this.question?.fields?.length) {
      return true;
    }

    const currentFieldsValid = this.question.fields.every((field) => {
      if (field.is_disabled) {
        return true;
      }

      switch (field.type) {
        case 'chip':
          return Array.isArray(field.answer_value) && field.answer_value.length > 0;
        case 'traffic-light':
        case 'likert-scale':
          return field.answer_value !== null && field.answer_value !== undefined;
        case 'text-area':
          if (typeof field.answer_value === 'string') {
            return field.answer_value.trim().length > 0;
          }
          return false;
        default:
          return assertNever(field);
      }
    });

    // Legacy implementation retained for reference:
    // return (
    //   this.question.answer_value !== null &&
    //   this.childQuestions
    //     .filter(
    //       (cq) =>
    //         cq.lower_bound <= this.question.answer_value &&
    //         cq.upper_bound >= this.question.answer_value
    //     )
    //     .every((cq) => cq.answer_value !== null)
    // );

    return currentFieldsValid;
  }

  parentValueChanged() {
    // Placeholder: new conditional handling to be implemented.
    // Legacy implementation retained for reference:
    // this.childQuestions
    //   .filter(
    //     (cq) =>
    //       this.question.answer_value <= cq.lower_bound ||
    //       this.question.answer_value >= cq.upper_bound
    //   )
    //   .forEach((cq) => (cq.answer_value = null));
    return;
  }

  answerQuestion() {
    this.questionAnswered.emit();
  }
}

