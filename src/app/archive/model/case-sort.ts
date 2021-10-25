export enum CaseSortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export enum CaseSortBy {
  OPEN_TIMESTAMP = 'open_timestamp',
  RESULT_SCORE = 'result_score'
}

export interface CaseSort {
  by: CaseSortBy;
  order: CaseSortOrder;
}
