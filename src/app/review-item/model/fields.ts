import { Condition } from './condition';
import { ChipOption, LikertScaleOption, MultiLineTextOption, TextAreaOption, TraficLightOption } from './options';

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

export interface MultiLineTextField extends BaseField {
  type: 'multi-line-text';
  question: string;
  options: MultiLineTextOption[];
  answer_value: string[] | null;
  additonal_option_count: number;
  max_length: number;
  placeholder: string;
}

export type Field = ChipField | TraficLightField | LikertScaleField | TextAreaField | MultiLineTextField;

