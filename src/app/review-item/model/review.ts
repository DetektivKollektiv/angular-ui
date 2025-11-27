import { Question } from './question';
import { ReviewState } from './review-state';

export interface Review {
  id: string;
  user_id: string;
  item_id: string;
  review_state: ReviewState; // review_state is typed directly as the ReviewState enum (open, in_progress, closed). Internally that enum maps to numeric values (0, 1, 2), so review_state gives you a predictable, type-safe representation you can us
  status: string; //status is the string label of that state (e.g. 'in_progress', 'closed'). Several parts of the existing UI assign it from the enum via ReviewState[ReviewState.closed], which yields the string name. The backend payloads and some templates expect this textual form, so we keep it alongside the enum value.
  questions: Question[];
}

