import { Detective } from './detective';
import { Comment } from './comment.interface';
import { ItemReview } from './item-review';
import { ItemSource } from './item-source';
import { ItemType } from './item-type';
import { Url } from './url.interface';
import { WarningTag } from './warning-tag';

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
  open_reviews_level_1: number;
  open_reviews_level_2: number;
  locked_by_user: string;
  lock_timestamp: string;
  open_timestamp: string;
  close_timestamp: string;
  tags: string[] = [];
  urls: Url[] = [];
  comments: Comment[] = [];
  reviews: ItemReview[] | null;
  warning_tags: WarningTag[];
  in_progress_reviews_level_1: number;
  in_progress_reviews_level_2: number;
  item_type: ItemType;
  users: Detective[];
}
