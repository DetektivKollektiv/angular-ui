import { ChipField, LikertScaleField, MultiLineTextField, TextAreaField, TraficLightField } from './fields';

interface BaseFieldAnswerChange {
  fieldId: string;
}

export type ChipFieldAnswerChange = BaseFieldAnswerChange & {
  fieldType: 'chip';
  value: ChipField['answer_value'];
};

export type TrafficLightAnswerChange = BaseFieldAnswerChange & {
  fieldType: 'traffic-light';
  value: TraficLightField['answer_value'];
};

export type LikertScaleAnswerChange = BaseFieldAnswerChange & {
  fieldType: 'likert-scale';
  value: LikertScaleField['answer_value'];
};

export type TextAreaAnswerChange = BaseFieldAnswerChange & {
  fieldType: 'text-area';
  value: TextAreaField['answer_value'];
};

export type MultiLineTextAnswerChange = BaseFieldAnswerChange & {
  fieldType: 'multi-line-text';
  value: MultiLineTextField['answer_value'];
};

export type FieldAnswerChange =
  | ChipFieldAnswerChange
  | TrafficLightAnswerChange
  | LikertScaleAnswerChange
  | TextAreaAnswerChange
  | MultiLineTextAnswerChange;

export type QuestionAnswerChange = FieldAnswerChange & { questionId: string };
