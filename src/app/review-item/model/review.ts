import { Question } from './question';

export interface Review {
  status: string;
  id: string;
  item_id: string;
  is_peer_review: boolean;
  belongs_to_good_pair?: any;
  user_id: string;
  start_timestamp: string;
  finish_timestamp: string;
  questions: Question[];
  comment: string;
  tags?: string[];
}
