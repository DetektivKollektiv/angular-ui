import {Option} from './option';

export interface Question {
  id: string;
  content: string;
  info: string;
  options: Option[];
}
