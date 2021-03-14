import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { Filter } from '../../model/filter';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Select, Store } from '@ngxs/store';
import { ArchiveState } from '../../state/archive.state';
import { Observable } from 'rxjs';
import { AddFilterKeyword, SetFilter } from '../../state/archive.actions';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ArchiveComponent implements OnInit {
  @Select(ArchiveState.filteredItems) items$: Observable<Item[]>;
  @Select(ArchiveState.filter) filter$: Observable<Filter>;
  @Select(ArchiveState.itemById) itemById$: Observable<Item>;

  public items = new MatTableDataSource<Item>();
  public displayedColumns = [
    'content',
    'open_timestamp',
    'close_timestamp',
    'result_score',
  ];
  expandedItem: Item | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.items$.subscribe((items) => (this.items.data = items));

    this.itemById$.subscribe((item) => {
      this.expandedItem = item;

      if (item) {
        this.viewportScroller.scrollToAnchor(item.id);
      }
    });

    this.route.queryParams.subscribe((params) => {
      if (params.id) {
        this.store.dispatch(new AddFilterKeyword(params.id));
      }
      // const filter = {
      //   ...(params.id && { id: params.id }),
      //   ...{ maxValue: params.maxValue ?? 4 },
      //   ...{ minValue: params.minValue ?? 1 },
      //   ...(params.keyword && {
      //     keywords:
      //       typeof params.keyword === 'string'
      //         ? [params.keyword]
      //         : [...params.keyword],
      //   }),
      //   ...(params.startDate && { startDate: params.startDate }),
      //   ...(params.endDate && { endDate: params.endDate }),
      // };
      // this.store.dispatch(new SetFilter(filter));
    });

    this.filter$.subscribe((filter) => {
      // this.router.navigate([], {
      //   relativeTo: this.route,
      //   queryParams: {
      //     ...(filter.id && { id: filter.id }),
      //     ...(filter.keywords &&
      //       filter.keywords.length > 0 && {
      //         keyword: filter.keywords,
      //       }),
      //     ...(filter.minValue && { minValue: filter.minValue }),
      //     ...(filter.maxValue && { maxValue: filter.maxValue }),
      //     ...(filter.startDate && { startDate: filter.startDate }),
      //     ...(filter.endDate && { endDate: filter.endDate }),
      //   },
      //   queryParamsHandling: '',
      // });
    });
  }
}
