import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TextAreaField } from '../../../model/fields';
import { TextAreaAnswerChange } from '../../../model/field-answer-change';

@Component({
  selector: 'app-text-area-field',
  templateUrl: './text-area-field.component.html',
  styleUrls: ['./text-area-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextAreaFieldComponent implements OnChanges {
  @Input() field!: TextAreaField;
  @Output() answerChange = new EventEmitter<TextAreaAnswerChange>();

  value = '';
  readonly rows = 5;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.field) {
      this.value = this.field?.answer_value ?? '';
    }
  }

  get placeholder(): string {
    return this.field?.options?.[0]?.placeholder ?? '';
  }

  get maxLength(): number {
    return this.field?.options?.[0]?.max_length ?? 500;
  }

  get currentLength(): number {
    return this.value?.length ?? 0;
  }

  onInput(event: Event): void {
    if (this.field?.is_disabled) {
      return;
    }

    const target = event.target as HTMLTextAreaElement;
    const nextValue = target.value?.slice(0, this.maxLength) ?? '';
    this.value = nextValue;

    this.answerChange.emit({
      fieldId: this.field.id,
      fieldType: 'text-area',
      value: nextValue
    });
  }
}
