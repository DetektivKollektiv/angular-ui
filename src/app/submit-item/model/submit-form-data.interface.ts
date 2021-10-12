export interface SubmitFormData {
  medium: 'link' | 'message';
  content: string | null;
  source: number | null;
  frequency: string | null;
  received_date: string | null;
  mail: string | null;
  policy: boolean;
  condition: boolean;
}
