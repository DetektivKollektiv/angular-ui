import { Field } from './fields';

interface Metadata {
  title: string;
  text: string;
  help_url: string;
  indent_level?: number; // 0 = keine Einrückung (default), 1 = eine Ebene, 2 = zwei Ebenen, etc.
}

/**
 * Internal UI-only state for a review question.
 *
 * This type represents ephemeral, client-side flags used by UI components
 * and view logic to control presentation and local interactions. It is for
 * in-memory use only and does NOT represent data stored in or retrieved from
 * the backend. Do NOT serialize, persist, or send instances of this type in
 * API requests.
 *
 * Properties:
 * - is_visible?: boolean — When true the question should be shown in the UI;
 *   when false or undefined the question may be hidden.
 * - is_answered?: boolean — When true the question has been answered locally;
 *   when false or undefined it is considered unanswered.
 * - has_error?: boolean — When true the question has validation errors;
 *   when false or undefined it is considered valid.
 * - is_visited?: boolean — When true the question has been visited by the user;
 *
 * @internal
 */
interface QuestionState {
  is_visible?: boolean;
  is_answered?: boolean;
  has_error?: boolean;
  is_visited?: boolean;
}

export interface Question extends QuestionState {
  id: string;
  metadata: Metadata;
  fields: Field[]; // Array von Fields - mehrere pro Slide möglich!
}

