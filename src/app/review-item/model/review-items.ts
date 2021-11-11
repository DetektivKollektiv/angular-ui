import { Item } from '../../model/item';

export interface ReviewItems {
  is_open_review: boolean;
  items: Item[];
}
