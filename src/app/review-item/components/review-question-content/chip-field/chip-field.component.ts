import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ChipField } from '../../../model/fields';
import { ChipFieldAnswerChange } from '../../../model/field-answer-change';

@Component({
  selector: 'app-chip-field',
  templateUrl: './chip-field.component.html',
  styleUrls: ['./chip-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipFieldComponent implements OnChanges {
  @Input() field!: ChipField;
  @Input() allowMultiple = false;
  @Output() answerChange = new EventEmitter<ChipFieldAnswerChange>();

  selected: Set<string> = new Set();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.field) {
      this.selected = new Set(this.field?.answer_value ?? []);
    }
  }

  trackByOptionId(_index: number, option: ChipField['options'][number]): string {
    return option.id;
  }

  toggle(optionId: string): void {
    if (this.field?.is_disabled) {
      return;
    }

    if (this.allowMultiple) {
      if (this.selected.has(optionId)) {
        this.selected.delete(optionId);
      } else {
        this.selected.add(optionId);
      }
    } else {
      if (this.selected.has(optionId)) {
        this.selected.clear();
      } else {
        this.selected = new Set([optionId]);
      }
    }

    const answers = Array.from(this.selected);
    this.answerChange.emit({
      fieldId: this.field.id,
      fieldType: 'chip',
      value: answers
    });
  }

  isSelected(optionId: string): boolean {
    return this.selected.has(optionId);
  }
}
