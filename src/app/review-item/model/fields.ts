import { Condition } from './condition';

interface BaseField {
  id: string;
  is_disabled: boolean;
  conditions?: Condition[];
}

export interface ChipField extends BaseField {
  type: 'chip';
  question: string;
  options: ChipOption[];
  answer_value: string[] | null; // Multi-Select: Array von Option-IDs
}

export interface TraficLightField extends BaseField {
  type: 'traffic-light';
  options: [TraficLightOption]; // Nur EINE Option pro Field
  answer_value: 0 | 1 | 2 | 3 | 4 | null; // Single-Select: Ein Wert
}

export interface LikertScaleField extends BaseField {
  type: 'likert-scale';
  question: string;
  options: LikertScaleOption[];
  answer_value: 0 | 1 | 2 | 3 | 4 | null; // Single-Select: Ein Wert
}

export interface TextAreaField extends BaseField {
  type: 'text-area';
  question: string;
  options: TextAreaOption[];
  answer_value: string | null; // Text-Input
}

export type Field = ChipField | TraficLightField | LikertScaleField | TextAreaField;

