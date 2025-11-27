import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MultiLineTextField } from '../../../model/fields';
import { MultiLineTextAnswerChange } from '../../../model/field-answer-change';

interface MultiLineRow {
  id: string;
  value: string;
  disabled: boolean;
  isAdditional: boolean;
}

@Component({
  selector: 'app-multi-line-text-field',
  templateUrl: './multi-line-text-field.component.html',
  styleUrls: ['./multi-line-text-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiLineTextFieldComponent implements OnChanges {
  @Input() field!: MultiLineTextField;
  @Output() answerChange = new EventEmitter<MultiLineTextAnswerChange>();

  rows: MultiLineRow[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.field) {
      this.buildRows();
    }
  }

  onInput(row: MultiLineRow, event: Event): void {
    if (row.disabled) {
      return;
    }

    const value = (event.target as HTMLInputElement).value.slice(0, this.field.max_length);
    row.value = value;
    this.syncAnswerValue();
  }

  clearRow(row: MultiLineRow): void {
    if (row.disabled) {
      return;
    }

    row.value = '';
    this.syncAnswerValue();
  }

  trackByRowId(_index: number, row: MultiLineRow): string {
    return row.id;
  }

  private buildRows(): void {
    if (!this.field) {
      this.rows = [];
      return;
    }

    const extras = this.field.answer_value ?? [];

    const optionRows = this.field.options.map<MultiLineRow>((option) => ({
      id: option.id,
      value: option.text,
      disabled: option.is_disabled || this.field.is_disabled,
      isAdditional: false
    }));

    const additionalRows: MultiLineRow[] = Array.from({ length: this.field.additonal_option_count || 0 }).map((_, index) => ({
      id: `additional_${index}`,
      value: extras[index] ?? '',
      disabled: this.field.is_disabled,
      isAdditional: true
    }));

    this.rows = [...optionRows, ...additionalRows];
  }

  private syncAnswerValue(): void {
    const additionalValues = this.rows
      .filter((row) => row.isAdditional)
      .map((row) => row.value)
      .filter((value) => value && value.trim().length > 0);

    this.answerChange.emit({
      fieldId: this.field.id,
      fieldType: 'multi-line-text',
      value: additionalValues
    });
  }
}
