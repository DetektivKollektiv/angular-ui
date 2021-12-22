import { Item } from '../../model/item';

export interface User {
  id: string;
  name: string;
  score: number;
  level: number;
  level_description: string;
  experience_points: number;
  progress: number;
  total_rank: number;
  level_rank: number;
  solved_cases_total: number;
  solved_cases_today: number;
  exp_needed: number;
  sign_up_timestamp: string;
  closed_items: Item[];
}
