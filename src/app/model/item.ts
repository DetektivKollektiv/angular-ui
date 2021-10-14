import { ItemSource } from './item-source';

/* eslint-disable @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match */
export class Item {
  content: string;
  id: string;
  mail: string;
  phone: string;
  type: string;
  item_type_id: string;
  source: ItemSource;
  channel: string;
  frequency: string;
  received_date: string;
  language: string;
  status: string;
  variance: number;
  result_score: number;
  open_reviews: number;
  locked_by_user: string;
  lock_timestamp: string;
  open_timestamp: string;
  close_timestamp: string;
  tags: string[] = [];
  urls: any[] = [];
  comments: any[] = [];
}
