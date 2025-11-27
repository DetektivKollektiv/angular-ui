import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { LikertScaleField } from '../../../model/fields';
import { LikertScaleAnswerChange } from '../../../model/field-answer-change';

type LikertValue = LikertScaleField['answer_value'];

@Component({
  selector: 'app-likert-scale-field',
  templateUrl: './likert-scale-field.component.html',
  styleUrls: ['./likert-scale-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LikertScaleFieldComponent implements OnChanges {
  @Input() field!: LikertScaleField;
  @Output() answerChange = new EventEmitter<LikertScaleAnswerChange>();

  selectedValue: LikertValue = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.field) {
      this.selectedValue = this.field?.answer_value ?? null;
    }
  }

  select(value: LikertValue): void {
    if (this.field?.is_disabled) {
      return;
    }

    this.selectedValue = value;
    this.answerChange.emit({
      fieldId: this.field.id,
      fieldType: 'likert-scale',
      value
    });
  }

  isSelected(value: LikertValue): boolean {
    return this.selectedValue === value;
  }

  trackByOptionValue(_index: number, option: LikertScaleField['options'][number]): number {
    return option.value;
  }
}
