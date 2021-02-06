import { Option } from './option';

export interface Question {
  id: string;
  content: string;
  info: string;
  hint: string;
  options: Option[];
}
