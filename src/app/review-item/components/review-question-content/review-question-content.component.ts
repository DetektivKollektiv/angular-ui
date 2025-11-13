import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ChipField, Field, LikertScaleField, MultiLineTextField, TextAreaField, TraficLightField } from '../../model/fields';
import { FieldAnswerChange, QuestionAnswerChange } from '../../model/field-answer-change';
import { Question } from '../../model/question';

@Component({
  selector: 'app-review-question-content',
  templateUrl: './review-question-content.component.html',
  styleUrls: ['./review-question-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewQuestionContentComponent {
  @Input() question!: Question;
  @Input() position = 1;
  @Input() total = 1;
  @Output() next = new EventEmitter<void>();
  @Output() answerChange = new EventEmitter<QuestionAnswerChange>();

  trackFieldById(_index: number, field: Field): string {
    return field.id;
  }

  onFieldAnswerChange(change: FieldAnswerChange): void {
    if (!this.question) {
      return;
    }

    this.answerChange.emit({
      ...change,
      questionId: this.question.id
    });
  }

  getFieldLabel(field: Field): string {
    switch (field.type) {
      case 'chip':
      case 'likert-scale':
      case 'multi-line-text':
      case 'text-area':
        return field.question ?? '';
      case 'traffic-light':
        return field.options?.[0]?.question ?? '';
      default:
        return '';
    }
  }

  shouldShowTrafficHeader(index: number, fields: Field[]): boolean {
    if (!fields.length) {
      return false;
    }

    for (let i = 0; i < fields.length; i += 1) {
      if (fields[i].type === 'traffic-light') {
        return i === index;
      }
    }

    return false;
  }

  isTrafficLightField(field: Field): field is TraficLightField {
    return field.type === 'traffic-light';
  }

  isLikertScaleField(field: Field): field is LikertScaleField {
    return field.type === 'likert-scale';
  }

  isTextAreaField(field: Field): field is TextAreaField {
    return field.type === 'text-area';
  }

  isChipField(field: Field): field is ChipField {
    return field.type === 'chip';
  }

  isMultiLineTextField(field: Field): field is MultiLineTextField {
    return field.type === 'multi-line-text';
  }

  onNext(): void {
    if (this.isSubmitQuestion()) {
      window.open('http://localhost:4200/#open-cases', '_blank', 'noopener');
      return;
    }

    if (this.isNextDisabled()) {
      return;
    }

    this.next.emit();
  }

  isNextDisabled(): boolean {
    if (this.isSubmitQuestion()) {
      return false;
    }

    return !this.question?.isAnswered;
  }

  isSubmitQuestion(): boolean {
    return this.question?.id === 'submit_slide';
  }

  getNextButtonLabel(): string {
    return this.isSubmitQuestion() ? 'Zu deinem Dashboard' : 'Weiter';
  }

  getVisibleFields(question: Question | null = this.question): Field[] {
    return question?.fields?.filter((field) => field.visible !== false) ?? [];
  }
}
