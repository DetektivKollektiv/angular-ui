export type ReportItemType = 'comment' | 'case';

export interface ReportItemDialogData {
  type: ReportItemType;
  itemId: string;
  content: string;
  message?: string;
}
