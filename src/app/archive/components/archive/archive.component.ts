import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoaderService} from '../../../shared/loader/service/loader.service';
import {ArchiveService} from '../../services/archive.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Item} from '../../../model/item';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  public itemsList: Item[] = [];
  public noItems: boolean;

  constructor(
    private archiveService: ArchiveService,
    private router: Router,
    private snackBar: MatSnackBar,
    private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.loaderService.show();

    this.archiveService.getClosedItems()
      .then(closedItems => {
        if(closedItems === null){
          this.noItems = true;
        } else {
          this.itemsList = closedItems;
        }
      })
      .catch(_ => {
        this.snackBar.open('Archiv kann nicht angezeigt werden.', 'Ok', {
          duration: 2000
        });
      })
      .finally(() => this.loaderService.hide());
  }

  home(): void {
    this.router.navigate(['/']);
  }
}
