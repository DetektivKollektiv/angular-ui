import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ArchiveService } from '../services/archive.service';
import { CreateComment, FetchAllItems, GetDetailItem } from './archive.actions';
import { ArchiveStateModel } from './archive.state.model';
import { Item } from '../model/item';

@State<ArchiveStateModel>({
  name: 'archive',
  defaults: {
    items: [],
    detailItem: null
  }
})
@Injectable()
export class ArchiveState implements NgxsOnInit {
  constructor(private archiveService: ArchiveService) {}

  @Selector()
  static items(state: ArchiveStateModel): Item[] {
    return state.items;
  }

  @Selector()
  static filteredItems(state: ArchiveStateModel): Item[] {
    // Filtering is disabled for now; return all items.
    return state.items;
  }

  @Selector()
  static detailItem(state: ArchiveStateModel): Item {
    return state.detailItem;
  }

  @Action(FetchAllItems)
  fetchAllItems(ctx: StateContext<ArchiveStateModel>) {
    return this.archiveService.getClosedItems().pipe(tap((items) => ctx.patchState({ items })));
  }

  @Action(GetDetailItem)
  getDetailItem(ctx: StateContext<ArchiveStateModel>, action: GetDetailItem) {
    return this.archiveService.getClosedItem(action.id).pipe(tap((detailItem) => ctx.patchState({ detailItem })));
  }

  @Action(CreateComment)
  createComment(ctx: StateContext<ArchiveStateModel>, action: CreateComment) {
    return this.archiveService.createComment(action.itemId, action.text, action.user).pipe(
      tap(() => ctx.dispatch(new GetDetailItem(action.itemId)))
    );
  }

  ngxsOnInit(ctx: StateContext<ArchiveStateModel>) {
    ctx.dispatch(new FetchAllItems());
  }
}
