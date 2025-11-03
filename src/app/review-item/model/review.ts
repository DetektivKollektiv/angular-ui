import { Question } from './question';

export interface Review {
  id: string;
  user_id: string;
  questions: Question[];
}

