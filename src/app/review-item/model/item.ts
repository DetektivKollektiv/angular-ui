export interface Item {
  id: string;
  content: string;
  language: string;
  status: string;
  variance: number;
  result_score: number;
  open_reviews_level_1: number;
  open_reviews_level_2: number;
  open_reviews: number;
  locked_by_user: string;
  lock_timestamp: string;
  tags?: string[];
  urls?: string[];
}
