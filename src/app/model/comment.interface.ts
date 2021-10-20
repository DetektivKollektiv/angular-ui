import { Detective } from './detective';

export interface Comment {
  timestamp: string;
  comment: string;
  is_review_comment: string;
  user: string;
  detective?: Detective;
}
