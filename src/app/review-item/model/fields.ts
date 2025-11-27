import { Condition } from './condition';
import { ChipOption, LikertScaleOption, MultiLineTextOption, TextAreaOption, TraficLightOption } from './options';

/**
 * Internal UI-only state for a review question.
 *
 * This type represents ephemeral, client-side flags used by UI components
 * and view logic to control presentation and local interactions. It is for
 * in-memory use only and does NOT represent data stored in or retrieved from
 * the backend. Do NOT serialize, persist, or send instances of this type in
 * API requests.
 *
 * Properties:
 * - is_visible?: boolean — When true the field should be shown in the UI;
 *   when false or undefined the field may be hidden.
 *
 * @internal
 */
interface FieldState {
  is_visible?: boolean;
}

interface BaseField extends FieldState {
  id: string;
  conditions?: Condition[];
  is_disabled: boolean;
  is_required?: boolean;
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

