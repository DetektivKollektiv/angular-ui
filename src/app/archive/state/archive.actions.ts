import { CaseFilter } from '../model/case-filter';
import { CaseSortBy, CaseSortOrder } from '../model/case-sort';

export class FetchAllItems {
  static readonly type = '[Archive] Fetch All Items';
}

export class GetDetailItem {
  static readonly type = '[Archive] Get Detail Item';
  constructor(public id: string) {}
}

export class SetFilter {
  static readonly type = '[Archive] Set Filter';

  constructor(public filter: CaseFilter) {}
}

export class AddFilterKeyword {
  static readonly type = '[Archive] Add Filter Keyword';

  constructor(public keyword: string) {}
}

export class RemoveFilterKeyword {
  static readonly type = '[Archive] Remove Filter Keyword';

  constructor(public keyword: string) {}
}

export class SetMinFilter {
  static readonly type = '[Archive] Set Min Filter';

  constructor(public min: number) {}
}

export class SetMaxFilter {
  static readonly type = '[Archive] Set Max Filter';

  constructor(public max: number) {}
}

export class SetStartDateFilter {
  static readonly type = '[Archive] Set Start Date Filter';
  constructor(public startDate: Date) {}
}

export class SetEndDateFilter {
  static readonly type = '[Archive] Set End Date Filter';
  constructor(public endDate: Date) {}
}

export class RemoveFilterId {
  static readonly type = '[Archive] Remove Filter Id';
}

export class CreateComment {
  static readonly type = '[Archive] Create Comment';
  constructor(public itemId: string, public text: string, public user: string) {}
}

export class SetSortOrder {
  static readonly type = '[Archive] Set Sort Order';
  constructor(public order: CaseSortOrder) {}
}

export class ToggleSortOrder {
  static readonly type = '[Archive] Toggle Sort Order';
}

export class SetSortBy {
  static readonly type = '[Archive] Set Sort By';
  constructor(public by: CaseSortBy) {}
}
