export interface ItemReviewQuestionOption {
  id: string;
  text: string;
  value: number;
  tooltip?: any;
}

export interface ItemReviewQuestion {
  answer_id: string;
  question_id: string;
  content: string;
  info: string;
  hint: string;
  lower_bound?: any;
  upper_bound?: any;
  parent_question_id?: any;
  max_children: number;
  answer_value: number;
  comment?: any;
  options: ItemReviewQuestionOption[];
}

export interface ItemReview {
  id: string;
  is_peer_review: boolean;
  belongs_to_good_pair?: any;
  user_id?: any;
  start_timestamp: string;
  finish_timestamp: string;
  questions: ItemReviewQuestion[];
  user: string;
}
