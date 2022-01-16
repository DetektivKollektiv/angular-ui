import { Component } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Item } from 'src/app/model/item';
import { CaseFilter } from '../../model/case-filter';
import { MatChipInputEvent } from '@angular/material/chips';
import { Select, Store } from '@ngxs/store';
import { ArchiveState } from '../../state/archive.state';
import { Observable } from 'rxjs';
import { AddFilterKeyword, RemoveFilterKeyword, SetFilter, SetSortBy, ToggleSortOrder } from '../../state/archive.actions';
import { ResultScoreMode } from '@shared/helper/components/result-score/result-score-mode';
import { MatDialog } from '@angular/material/dialog';
import { ArchiveListFilterComponent } from '../archive-list-filter/archive-list-filter.component';
import { CaseSort, CaseSortBy } from '../../model/case-sort';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
  @Select(ArchiveState.filteredItems) items$: Observable<Item[]>;
  @Select(ArchiveState.filter) filter$: Observable<CaseFilter>;
  @Select(ArchiveState.sort) sort$: Observable<CaseSort>;

  public archiveQuestions: any[] = [
    {
      title: 'Wann sehe ich etwas im Archiv?',
      description: 'Jeder abgeschlossene - von den Detektiv*innen im Peer Review final bearbeitete - Fall '
      + 'wird ins Archiv gestellt und ist hier zu sehen.',
      background: 'color__neon-blue',
      icon: 'fal fa-eye'
    },
    {
      title: 'Wieviele Detektiv*innen lösen einen Fall?',
      description: 'Um den Fall abzuschließen, müssen sich 8 Detektiv*innen beteiligen, '
      + 'jede*r erstellt unabhängig voneinander eine eigene Bewertung.',
      background: 'color__bittersweet',
      icon: 'fal fa-user-cowboy'
    },
    {
      title: 'Was ist ein Peer Review?',
      description: 'Im codetekt Peer Review werden 4 Paare gebildet, dazu gehört jeweils ein*e Detektiv*in '
      + 'mit mehr bzw. weniger Erfahrung.',
      background: 'color__green',
      icon: 'fal fa-user-crown'
    },
    {
      title: 'Wie errechnet sich der Score?',
      description: 'Der Gesamtscore ist der Durchschnitt aller Einzelbewertungen im Peer Review Verfahren. ',
      background: 'color__gold',
      icon: 'fal fa-chart-bar'
    },
    {
      title: 'Wie entsteht die Einzelbewertung?',
      description: 'Die Einzelbewertung ergibt sich aus dem Durchschnitt aller Punkte, die ein*e Detektiv*in '
      + 'bei der Beantwortung der Fragen zu einem Fall erzielt. ',
      background: 'color__neon-blue',
      icon: 'fal fa-chart-bar'
    }
  ];

  public loaded = false;
  public resultScoreMode = ResultScoreMode.bar;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  archiveListFilterOpened = false;

  caseSortByValues: string[] = Object.values(CaseSortBy);

  constructor(private store: Store, private matDialog: MatDialog, private viewportScroller: ViewportScroller) {}

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

  onListPageChanged() {
    // offset of the navigation bar
    this.viewportScroller.setOffset([0, 70]);
    this.viewportScroller.scrollToAnchor('archive-bottom-section');
  }
}
