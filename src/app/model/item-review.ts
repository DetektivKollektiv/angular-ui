import { ItemReviewQuestion } from './Item-review-question';

export interface ItemReview {
  id: string;
  is_peer_review: boolean;
  belongs_to_good_pair?: any;
  user_id?: any;
  start_timestamp: string;
  finish_timestamp: string;
  questions: ItemReviewQuestion[];
  user: string;
  status: string;
  item_id: string;
  comment: string;
}
