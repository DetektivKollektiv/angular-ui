export class FetchAllItems {
  static readonly type = '[Archive] Fetch All Items';
}

export class GetDetailItem {
  static readonly type = '[Archive] Get Detail Item';
  constructor(public id: string) {}
}

export class CreateComment {
  static readonly type = '[Archive] Create Comment';
  constructor(public itemId: string, public text: string, public user: string) {}
}
