import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { ArchiveService } from '../../services/archive.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from 'src/app/model/item';
import { Filter } from '../../model/filter';
import { MatDialog } from '@angular/material/dialog';
import { ArchiveDetailsComponent } from '../archive-details/archive-details.component';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {
  public itemsList: Item[] = [];
  public itemsDisplayed: Item[] = [];
  public loaded: boolean;

  constructor(
    private archiveService: ArchiveService,
    private router: Router,
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
        this.loaderService.hide();
        this.itemsList = closedItems;
        this.itemsDisplayed = this.itemsList;

        this.route.params.subscribe((params) => {
          if (params?.id) {
            this.showDialog(params.id);
          }
        });
      })
      .catch((_) => {
        this.loaderService.hide();
        this.snackBar.open('Archiv kann nicht angezeigt werden.', 'Ok', {
          duration: 2000,
        });
      })
      .finally(() => (this.loaded = true));
  }
  showDialog(id: string) {
    const item = this.itemsList.find((i) => i.id === id);

    if (item) {
      this.dialog.open(ArchiveDetailsComponent, { data: item });
    } else {
      this.snackBar.open('Nope');
    }
  }

  test(event: Filter): void {
    this.itemsDisplayed = this.itemsList.filter(
      (i) =>
        (i.tags.map((t) => t.toLowerCase()).indexOf(event.text.toLowerCase()) >=
          0 ||
          i.content.toLowerCase().includes(event.text.toLowerCase())) &&
        i.result_score >= event.minValue &&
        i.result_score <= event.maxValue
    );
  }
}
