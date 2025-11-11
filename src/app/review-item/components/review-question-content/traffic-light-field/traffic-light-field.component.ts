import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TraficLightField } from '../../../model/fields';
import { TrafficLightAnswerChange } from '../../../model/field-answer-change';

type TrafficLightValue = TraficLightField['answer_value'];

interface TrafficLightDefinition {
  value: Exclude<TrafficLightValue, null>;
  color: string;
  icon: 'help' | 'remove';
  label: string;
}

@Component({
  selector: 'app-traffic-light-field',
  templateUrl: './traffic-light-field.component.html',
  styleUrls: ['./traffic-light-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrafficLightFieldComponent implements OnChanges {
  @Input() field!: TraficLightField;
  @Input() showHeader = false;
  @Output() answerChange = new EventEmitter<TrafficLightAnswerChange>();

  selectedValue: TrafficLightValue = null;

  readonly lights: TrafficLightDefinition[] = [
    { value: 0, color: '#22c55e', icon: 'help', label: 'Sehr gut' },
    { value: 1, color: '#a3e635', icon: 'help', label: 'Gut' },
    { value: 2, color: '#facc15', icon: 'help', label: 'Mittel' },
    { value: 3, color: '#f97316', icon: 'help', label: 'Schwach' },
    { value: 4, color: '#9ca3af', icon: 'help', label: 'Keine Antwort' }
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.field) {
      this.selectedValue = this.field?.answer_value ?? null;
    }
  }

  trackLightByValue(_index: number, light: TrafficLightDefinition): number {
    return light.value;
  }

  select(value: TrafficLightDefinition['value']): void {
    if (this.field?.is_disabled) {
      return;
    }

    this.selectedValue = value;
    this.answerChange.emit({
      fieldId: this.field.id,
      fieldType: 'traffic-light',
      value
    });
  }

  isSelected(value: TrafficLightDefinition['value']): boolean {
    return this.selectedValue === value;
  }

  get question(): string {
    return this.field?.options?.[0]?.question ?? '';
  }
}
