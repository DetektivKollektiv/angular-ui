import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { finalize, tap } from 'rxjs/operators';
import { ArchiveService } from '../services/archive.service';
import {
  AddFilterKeyword,
  FetchAllItems,
  RemoveFilterId,
  RemoveFilterKeyword,
  SetEndDateFilter,
  SetFilter,
  SetMaxFilter,
  SetMinFilter,
  SetStartDateFilter,
} from './archive.actions';
import { ArchiveStateModel } from './archive.state.model';
import { patch, append, removeItem } from '@ngxs/store/operators';
import { LoaderService } from 'src/app/shared/loader/service/loader.service';

@State<ArchiveStateModel>({
  name: 'archive',
  defaults: {
    items: [],
    filter: {
      keywords: [],
      maxValue: 4,
      minValue: 1,
    },
  },
})
@Injectable()
export class ArchiveState implements NgxsOnInit {
  constructor(
    private archiveService: ArchiveService,
    private loaderService: LoaderService
  ) {}

  @Selector()
  static items(state: ArchiveStateModel) {
    return state.items;
  }

  @Selector()
  static filter(state: ArchiveStateModel) {
    return state.filter;
  }

  @Selector()
  static filteredItems(state: ArchiveStateModel) {
    return state.items.filter(
      (i) =>
        (!state.filter.keywords ||
          state.filter.keywords
            .map((k) => k.toLowerCase())
            .every(
              (k) =>
                i.tags.map((t) => t.toLowerCase()).includes(k) ||
                i.content.toLowerCase().includes(k) ||
                i.id === k
            )) &&
        (!state.filter.maxValue || state.filter.maxValue >= i.result_score) &&
        (!state.filter.minValue || state.filter.minValue <= i.result_score) &&
        (!state.filter.startDate ||
          new Date(i.open_timestamp) >= state.filter.startDate) &&
        (!state.filter.endDate ||
          new Date(i.open_timestamp) <= state.filter.endDate)
    );
  }

  @Selector()
  static itemById(state: ArchiveStateModel) {
    return state.items.find((i) => i.id === state.filter.id);
  }

  @Action(FetchAllItems)
  fetchAllItems(ctx: StateContext<ArchiveStateModel>) {
    this.loaderService.show();

    return this.archiveService.getClosedItems().pipe(
      finalize(() => this.loaderService.hide()),
      tap((items) => {
        ctx.patchState({ items });
      })
    );
  }

  @Action(SetFilter)
  setFilter(ctx: StateContext<ArchiveStateModel>, action: SetFilter) {
    ctx.patchState({
      filter: action.filter,
    });
  }

  @Action(AddFilterKeyword)
  addFilterKeyword(
    ctx: StateContext<ArchiveStateModel>,
    action: AddFilterKeyword
  ) {
    ctx.setState(
      patch({
        filter: patch({
          keywords: append<string>([action.keyword]),
        }),
      })
    );
  }

  @Action(RemoveFilterKeyword)
  removeFilterKeyword(
    ctx: StateContext<ArchiveStateModel>,
    action: RemoveFilterKeyword
  ) {
    ctx.setState(
      patch({
        filter: patch({
          keywords: removeItem<string>((keyword) => keyword === action.keyword),
        }),
      })
    );
  }

  @Action(SetMaxFilter)
  setMaxFilter(ctx: StateContext<ArchiveStateModel>, action: SetMaxFilter) {
    ctx.setState(
      patch({
        filter: patch({
          maxValue: action.max,
        }),
      })
    );
  }

  @Action(SetMinFilter)
  setMinFilter(ctx: StateContext<ArchiveStateModel>, action: SetMinFilter) {
    ctx.setState(
      patch({
        filter: patch({
          minValue: action.min,
        }),
      })
    );
  }

  @Action(RemoveFilterId)
  removeFilterId(ctx: StateContext<ArchiveStateModel>) {
    ctx.setState(
      patch({
        filter: patch({
          id: null,
        }),
      })
    );
  }

  @Action(SetStartDateFilter)
  setStartDateFilter(
    ctx: StateContext<ArchiveStateModel>,
    action: SetStartDateFilter
  ) {
    ctx.setState(
      patch({
        filter: patch({
          startDate: action.startDate,
        }),
      })
    );
  }

  @Action(SetEndDateFilter)
  setEndDateFilter(
    ctx: StateContext<ArchiveStateModel>,
    action: SetEndDateFilter
  ) {
    ctx.setState(
      patch({
        filter: patch({
          endDate: action.endDate,
        }),
      })
    );
  }

  ngxsOnInit(ctx?: StateContext<any>) {
    ctx.dispatch(new FetchAllItems());
  }
}
