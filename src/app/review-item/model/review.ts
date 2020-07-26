export interface ReviewAnswer {
  review_question_id: string;
  answer: number;
}

export interface Review {
  item_id: string;
  is_peer_review: boolean;
  review_answers: ReviewAnswer[];
}
