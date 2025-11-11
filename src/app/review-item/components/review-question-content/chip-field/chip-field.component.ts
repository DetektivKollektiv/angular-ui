import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChipField } from '../../../model/fields';

@Component({
  selector: 'app-chip-field',
  templateUrl: './chip-field.component.html',
  styleUrls: ['./chip-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipFieldComponent implements OnChanges {
  @Input() field!: ChipField;
  @Input() allowMultiple = false;

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

    this.field.answer_value = Array.from(this.selected);
  }

  isSelected(optionId: string): boolean {
    return this.selected.has(optionId);
  }
}
