import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
import { AddFilterKeyword } from '../../state/archive.actions';
import { ViewportScroller } from '@angular/common';
import { ResultScoreMode } from 'src/app/shared/helper/components/result-score/result-score-mode';

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
  /*

  Change these questions to match what is in 06-Archiv in Adobe XD



  */
  public questionPrompts: any[] = [
    {
      title: 'Woran erkenne ich eine gute Quelle?',
      description: 'Hier haben wir alles zusammengefasst um dir zu helfen gute Quellen zu erkennen',
      background: '#68a8ff',
      icon: 'fal fa-newspaper'
    },
    {
      title: 'Die Quelle ist nicht mehr abrufbar. Was kann ich tun?',
      description: 'Eine Anleitung für genau solche Fälle findest du auf dieser Seite.',
      background: '#3a9832',
      icon: 'fal fa-scroll-old'
    },
    {
      title: 'Kann ich den Fall abgeben?',
      description: 'Ja, das geht. Hier erfährst du wie.',
      background: '#be9843',
      icon: 'fal fa-hands-helping'
    },
    {
      title: 'Eine weitere Frage??',
      description: 'Und hier ein weiterer Beschreibungstext, der erklärt, was mich beim Klick darauf erwartet.',
      background: '#8f1fff',
      icon: 'fal fa-leaf'
    },
  ];

  public expandedItem: Item | null;
  public loaded = false;
  public resultScoreMode = ResultScoreMode.bar;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.items$.subscribe((items) => {
      // Safari timestamp fix
      // TODO: Remove when format is adapted in API
      const itemsSafariSafe = [];
      items.forEach(val => itemsSafariSafe.push(Object.assign({}, val)));
      itemsSafariSafe.forEach((item) => {
        item.open_timestamp = item.open_timestamp.replace(/\s/g, 'T');
        item.close_timestamp = item.close_timestamp.replace(/\s/g, 'T');
      });

      this.items.data = itemsSafariSafe;
      this.loaded = true;
    });

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
    });

  }
}
