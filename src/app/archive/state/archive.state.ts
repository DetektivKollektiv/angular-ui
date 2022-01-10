import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ArchiveService } from '../services/archive.service';
import {
  AddFilterKeyword,
  CreateComment,
  FetchAllItems,
  GetDetailItem,
  RemoveFilterId,
  RemoveFilterKeyword,
  SetEndDateFilter,
  SetFilter,
  SetMaxFilter,
  SetMinFilter,
  SetSortBy,
  SetSortOrder,
  SetStartDateFilter,
  ToggleSortOrder
} from './archive.actions';
import { ArchiveStateModel } from './archive.state.model';
import { patch, append, removeItem } from '@ngxs/store/operators';
import { LoaderService } from '@shared/loader/service/loader.service';
import { Item } from '../../model/item';
import { CaseSort, CaseSortBy, CaseSortOrder } from '../model/case-sort';

@State<ArchiveStateModel>({
  name: 'archive',
  defaults: {
    items: [],
    detailItem: null,
    filter: {
      keywords: [],
      maxValue: 100,
      minValue: 0
    },
    sort: { by: CaseSortBy.OPEN_TIMESTAMP, order: CaseSortOrder.DESC }
  }
})
@Injectable()
export class ArchiveState implements NgxsOnInit {
  constructor(private archiveService: ArchiveService, private loaderService: LoaderService) {}

  private static sortItems(sort: CaseSort, item1: Item, item2: Item): number {
    const { order, by } = sort;
    const first = order === 'asc' ? item1 : item2;
    const second = order === 'asc' ? item2 : item1;

    switch (by) {
      case CaseSortBy.RESULT_SCORE:
        return first[by] - second[by];
      default:
        return first[by].localeCompare(second[by]);
    }
  }

  @Selector()
  static items(state: ArchiveStateModel) {
    return state.items;
  }

  @Selector()
  static filter(state: ArchiveStateModel) {
    return state.filter;
  }

  @Selector()
  static sort(state: ArchiveStateModel) {
    return state.sort;
  }

  @Selector()
  static filteredItems(state: ArchiveStateModel) {
    return state.items
      .filter(
        (i) =>
          (!state.filter.keywords ||
            state.filter.keywords
              .map((k) => k.toLowerCase())
              .every((k) => i.tags.map((t) => t.toLowerCase()).includes(k) || i.content.toLowerCase().includes(k) || i.id === k)) &&
          (!state.filter.maxValue || state.filter.maxValue >= i.result_score) &&
          (!state.filter.minValue || state.filter.minValue <= i.result_score) &&
          (!state.filter.startDate || new Date(i.open_timestamp) >= state.filter.startDate) &&
          (!state.filter.endDate || new Date(i.open_timestamp) <= state.filter.endDate)
      )
      .sort((item1, item2) => ArchiveState.sortItems(state.sort, item1, item2));
  }

  @Selector()
  static itemById(state: ArchiveStateModel) {
    return state.items.find((i) => i.id === state.filter.id);
  }

  @Selector()
  static detailItem(state: ArchiveStateModel): Item {
    return state.detailItem;
  }

  @Selector([ArchiveState.detailItem])
  static aggregatedResponses(state: ArchiveStateModel, item: Item): { [answer: string]: number } {
    const aggregated = {};
    if (!item) {
      return aggregated;
    }
    for (const review of item.reviews) {
      for (const question of review.questions) {
        const { options, answer_value } = question;
        if (answer_value === null) {
          continue;
        }

        const theOption = options.find((opt: any) => opt.value === answer_value);
        const { text } = theOption;

        if (text in aggregated) {
          aggregated[text]++;
        } else {
          aggregated[text] = 1;
        }
      }
    }

    return aggregated;
  }

  @Selector([ArchiveState.aggregatedResponses])
  static responsesCount(state: ArchiveStateModel, responses: { [answer: string]: number }): number {
    return Object.values(responses).reduce((accumulator: number, value: number) => (accumulator += value), 0);
  }

  @Selector([ArchiveState.aggregatedResponses, ArchiveState.responsesCount])
  static responsesPercentages(state: ArchiveStateModel, responses: { [answer: string]: number }, count: number) {
    return Object.keys(responses).reduce((acc: any, currentKey: string) => {
      acc[currentKey] = Math.round((responses[currentKey] / count) * 100);
      return acc;
    }, {});
  }

  @Selector([ArchiveState.responsesPercentages])
  static filteredResponsesPercentages(state: ArchiveStateModel, responses: { [answer: string]: number }) {
    return (answers: string[], filterFn?: (responseCount) => boolean) =>
      answers.filter((answer) => !filterFn || filterFn(responses[answer])).map((answer) => ({ answer, count: responses[answer] }));
  }

  @Action(FetchAllItems)
  fetchAllItems(ctx: StateContext<ArchiveStateModel>) {
    return this.archiveService.getClosedItems().pipe(
      tap((items) => {
        ctx.patchState({ items });
      })
    );
  }

  @Action(GetDetailItem)
  getDetailItem(ctx: StateContext<ArchiveStateModel>, action) {
    return this.archiveService.getClosedItem(action.id).pipe(
      tap((detailItem) => {
        ctx.patchState({ detailItem });
      })
    );
  }

  @Action(SetFilter)
  setFilter(ctx: StateContext<ArchiveStateModel>, action: SetFilter) {
    ctx.patchState({
      filter: action.filter
    });
  }

  @Action(AddFilterKeyword)
  addFilterKeyword(ctx: StateContext<ArchiveStateModel>, action: AddFilterKeyword) {
    ctx.setState(
      patch({
        filter: patch({
          keywords: append<string>([action.keyword])
        })
      })
    );
  }

  @Action(RemoveFilterKeyword)
  removeFilterKeyword(ctx: StateContext<ArchiveStateModel>, action: RemoveFilterKeyword) {
    ctx.setState(
      patch({
        filter: patch({
          keywords: removeItem<string>((keyword) => keyword === action.keyword)
        })
      })
    );
  }

  @Action(SetMaxFilter)
  setMaxFilter(ctx: StateContext<ArchiveStateModel>, action: SetMaxFilter) {
    ctx.setState(
      patch({
        filter: patch({
          maxValue: action.max
        })
      })
    );
  }

  @Action(SetMinFilter)
  setMinFilter(ctx: StateContext<ArchiveStateModel>, action: SetMinFilter) {
    ctx.setState(
      patch({
        filter: patch({
          minValue: action.min
        })
      })
    );
  }

  @Action(RemoveFilterId)
  removeFilterId(ctx: StateContext<ArchiveStateModel>) {
    ctx.setState(
      patch({
        filter: patch({
          id: null
        })
      })
    );
  }

  @Action(SetStartDateFilter)
  setStartDateFilter(ctx: StateContext<ArchiveStateModel>, action: SetStartDateFilter) {
    ctx.setState(
      patch({
        filter: patch({
          startDate: action.startDate
        })
      })
    );
  }

  @Action(SetEndDateFilter)
  setEndDateFilter(ctx: StateContext<ArchiveStateModel>, action: SetEndDateFilter) {
    ctx.setState(
      patch({
        filter: patch({
          endDate: action.endDate
        })
      })
    );
  }

  @Action(CreateComment)
  createComment(ctx: StateContext<ArchiveStateModel>, action: CreateComment) {
    return this.archiveService.createComment(action.itemId, action.text, action.user).pipe(
      tap(() => {
        ctx.dispatch(new GetDetailItem(action.itemId));
      })
    );
  }

  @Action(ToggleSortOrder)
  toggleSortOrder(ctx: StateContext<ArchiveStateModel>) {
    ctx.setState(
      patch({
        sort: patch({
          order: ctx.getState().sort.order === CaseSortOrder.ASC ? CaseSortOrder.DESC : CaseSortOrder.ASC
        })
      })
    );
  }

  @Action(SetSortOrder)
  setSortOrder(ctx: StateContext<ArchiveStateModel>, action: SetSortOrder) {
    ctx.setState(
      patch({
        sort: patch({
          order: action.order
        })
      })
    );
  }

  @Action(SetSortBy)
  setSortBy(ctx: StateContext<ArchiveStateModel>, action: SetSortBy) {
    ctx.setState(
      patch({
        sort: patch({
          by: action.by
        })
      })
    );
  }

  ngxsOnInit(ctx?: StateContext<any>) {
    ctx.dispatch(new FetchAllItems());
  }
}
