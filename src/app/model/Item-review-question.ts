import { Detective } from './detective';
import { ItemReviewQuestionOption } from './Item-review-question-option';

export interface ItemReviewQuestion {
  answer_id: string;
  question_id: string;
  content: string;
  info?: string;
  hint?: string;
  lower_bound?: number;
  upper_bound?: number;
  parent_question_id?: any;
  max_children: number;
  answer_value?: number;
  comment?: any;
  options: ItemReviewQuestionOption[];
  detective?: Detective;
}
