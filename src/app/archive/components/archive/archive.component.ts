import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Item } from 'src/app/model/item';
import { CaseFilter } from '../../model/case-filter';
import { MatTableDataSource } from '@angular/material/table';
import { MatChipInputEvent } from '@angular/material/chips';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Select, Store } from '@ngxs/store';
import { ArchiveState } from '../../state/archive.state';
import { Observable } from 'rxjs';
import {
  AddFilterKeyword,
  RemoveFilterKeyword,
  SetEndDateFilter,
  SetFilter,
  SetMaxFilter,
  SetMinFilter,
  SetSortBy,
  SetSortOrder,
  SetStartDateFilter,
  ToggleSortOrder
} from '../../state/archive.actions';
import { ViewportScroller } from '@angular/common';
import { ResultScoreMode } from 'src/app/shared/helper/components/result-score/result-score-mode';
import { MatDialog } from '@angular/material/dialog';
import { ArchiveListFilterComponent } from '../archive-list-filter/archive-list-filter.component';
import { CaseSort, CaseSortBy, CaseSortOrder } from '../../model/case-sort';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class ArchiveComponent implements OnInit {
  @Select(ArchiveState.filteredItems) items$: Observable<Item[]>;
  @Select(ArchiveState.filter) filter$: Observable<CaseFilter>;
  @Select(ArchiveState.itemById) itemById$: Observable<Item>;
  @Select(ArchiveState.sort) sort$: Observable<CaseSort>;

  public filter: CaseFilter;
  public items: Item[];

  public archiveQuestions: any[] = [
    {
      title: 'Wann sehe ich etwas im Archiv?',
      description: 'Hier kommt einiges zusammen. Genaue Details findest du hier.',
      background: 'color__bittersweet',
      icon: 'fal fa-eye'
    },
    {
      title: 'Wie errechnet sich der Score?',
      description: 'Eine Anleitung für genau solche Fälle findest du auf dieser Seite.',
      background: 'color__neon-blue',
      icon: 'fal fa-chart-bar'
    },
    {
      title: 'Eine weitere Frage?',
      description: 'Und hier ein weiterer Beschreibungstext, der erklärt, was mich beim Klick darauf erwartet.',
      background: 'color__purple',
      icon: 'fal fa-leaf'
    },
    {
      title: 'Eine weitere Frage?',
      description: 'Und hier ein weiterer Beschreibungstext, der erklärt, was mich beim Klick darauf erwartet.',
      background: 'color__bittersweet',
      icon: 'fal fa-leaf'
    }
  ];

  public loaded = false;
  public resultScoreMode = ResultScoreMode.bar;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  archiveListFilterOpened = false;

  caseSortByValues: string[] = Object.values(CaseSortBy);

  constructor(private store: Store, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.items$.subscribe((items) => {
      // Safari timestamp fix
      // TODO: Remove when format is adapted in API
      // const itemsSafariSafe = [];
      // items.forEach(val => itemsSafariSafe.push(Object.assign({}, val)));
      // itemsSafariSafe.forEach((item) => {
      //   item.open_timestamp = item.open_timestamp.replace(/\s/g, 'T');
      //   item.close_timestamp = item.close_timestamp.replace(/\s/g, 'T');
      // });

      this.items = items;
      this.loaded = true;
    });

    this.filter$.subscribe((filter) => (this.filter = filter));
  }

  remove(keyword: string): void {
    this.store.dispatch(new RemoveFilterKeyword(keyword));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.store.dispatch(new AddFilterKeyword(value));
    }

    if (input) {
      input.value = '';
    }
  }

  onApplyFilter(caseFilter: CaseFilter) {
    const { minValue, maxValue, ...filter } = caseFilter;
    this.store.dispatch(new SetFilter({ ...filter, minValue: minValue / 25, maxValue: maxValue / 25 }));
    this.archiveListFilterOpened = false;
  }

  openFilterDialog() {
    this.matDialog
      .open(ArchiveListFilterComponent, {
        panelClass: 'no-padding-dialog-container',
        height: '100vh',
        width: '100vw',
        maxWidth: '100vw',
        maxHeight: '100vh'
      })
      .afterClosed()
      .subscribe((filterData: CaseFilter) => {
        if (filterData) {
          this.onApplyFilter(filterData);
        }
      });
  }

  changeSortOrder() {
    this.store.dispatch(new ToggleSortOrder());
  }

  changeSortBy(value: string) {
    this.store.dispatch(new SetSortBy(value as CaseSortBy));
  }
}
