import { Option } from './option';

export interface Question {
  answer_id: string;
  question_id: string;
  content: string;
  info?: string;
  hint?: string;
  lower_bound?: number;
  upper_bound?: number;
  parent_question_id: string;
  max_children: number;
  answer_value?: number;
  comment?: any;
  options: Option[];
}
