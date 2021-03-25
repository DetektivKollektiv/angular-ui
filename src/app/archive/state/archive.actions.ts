import { Filter } from '../model/filter';

export class FetchAllItems {
  static readonly type = '[Archive] Fetch All Items';
}

export class SetFilter {
  static readonly type = '[Archive] Set Filter';

  constructor(public filter: Filter) {}
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
