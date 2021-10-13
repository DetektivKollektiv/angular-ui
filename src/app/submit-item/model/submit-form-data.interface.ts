import { ItemSource } from '../../model/item-source.type';

export interface SubmitFormData {
  item_type_id: string;
  content: string | null;
  source: ItemSource | 'other';
  other_source: string | null;
  frequency: string | null;
  received_date: string | null;
  mail: string | null;
  policy: boolean;
  condition: boolean;
}
