import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { ArchiveService } from '../../services/archive.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from 'src/app/model/item';
import { Filter } from '../../model/filter';
import { MatDialog } from '@angular/material/dialog';
import { ArchiveDetailsComponent } from '../archive-details/archive-details.component';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

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
  public items = new MatTableDataSource<Item>();
  public displayedColumns = [
    'content',
    'open_timestamp',
    'close_timestamp',
    'result_score',
  ];
  expandedItem: Item | null;

  public itemsList: Item[] = [];
  public itemsDisplayed: Item[] = [];

  public filter: Filter = { text: '', minValue: 1, maxValue: 4 };

  constructor(
    private archiveService: ArchiveService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private loaderService: LoaderService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loaderService.show();
    this.archiveService
      .getClosedItems()
      .then((closedItems) => {
        this.itemsList = closedItems;
        this.items.data = closedItems;
        this.items.filterPredicate = this.itemFilterPredicate;
        this.items.filter = JSON.stringify(this.filter);

        this.route.params.subscribe((params) => {
          if (params?.id) {
            // this.items.filter = JSON.stringify({ id: params.id } as Filter);
            this.expandedItem = this.items.data.find((i) => i.id === params.id);
          }
        });
      })
      .catch((_) => {
        this.snackBar.open('Archiv kann nicht angezeigt werden.', 'Ok', {
          duration: 2000,
        });
      })
      .finally(() => {
        this.loaderService.hide();
      });
  }

  showDialog(id: string) {
    const item = this.itemsList.find((i) => i.id === id);

    if (item) {
      this.dialog.open(ArchiveDetailsComponent, { data: item });
    } else {
      this.snackBar.open('Nope');
    }
  }

  applyFilter(event: Filter): void {
    this.items.filter = JSON.stringify(event);
  }

  itemFilterPredicate(item: Item, filterString: string): boolean {
    const filter = JSON.parse(filterString) as Filter;

    return (
      (filter.text === undefined ||
        item.tags
          .map((t) => t.toLowerCase())
          .indexOf(filter.text.toLowerCase()) >= 0 ||
        item.content.toLowerCase().includes(filter.text.toLowerCase())) &&
      (filter.minValue === undefined || item.result_score >= filter.minValue) &&
      (filter.maxValue === undefined || item.result_score <= filter.maxValue) &&
      (filter.id === undefined || item.id === filter.id)
    );
  }
}
