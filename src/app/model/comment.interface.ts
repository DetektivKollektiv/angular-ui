import { Detective } from './detective';

export interface Comment {
  id: string;
  timestamp: string;
  comment: string;
  is_review_comment: string;
  user: string;
  detective?: Detective;
}
