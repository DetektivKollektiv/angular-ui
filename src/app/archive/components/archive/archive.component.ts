import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { ArchiveService } from '../../services/archive.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from 'src/app/model/item';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {
  public itemsList: Item[] = [];
  public itemsDisplayed: Item[] = [];

  public searchTag = '';
  searchFormGroup: FormGroup;
  tagFormControl: FormControl;
  minIndexFormControl: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private archiveService: ArchiveService,
    private router: Router,
    private snackBar: MatSnackBar,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.tagFormControl = new FormControl();
    this.searchFormGroup = this.formBuilder.group({
      tagFormControl: this.tagFormControl,
      minIndexFormControl: this.minIndexFormControl,
    });

    this.loaderService.show();
    this.archiveService
      .getClosedItems()
      .then((closedItems) => {
        this.loaderService.hide();
        this.itemsList = closedItems;
        this.itemsDisplayed = this.itemsList;
      })
      .catch((_) => {
        this.loaderService.hide();
        this.snackBar.open('Archiv kann nicht angezeigt werden.', 'Ok', {
          duration: 2000,
        });
      });
  }

  async searchByTag(): Promise<void> {
    const searchResult: Item[] = [];
    this.searchTag = this.tagFormControl.value;
    if (!this.searchTag) {
      this.clearSearchTag();
      return;
    }
    // Search for items that have search term as tag
    this.itemsList.forEach((item: Item) => {
      if (!item.tags) {
        // Continue with next item
        return;
      }
      if (
        item.tags.some((x) => x.toUpperCase() === this.searchTag.toUpperCase())
      ) {
        searchResult.push(item);
      }
    });
    // Search for items that have search term in item content (will be below exact tag matches)
    this.itemsList.forEach((item: Item) => {
      if (
        item.content.toUpperCase().includes(this.searchTag.toUpperCase()) &&
        !searchResult.includes(item)
      ) {
        searchResult.push(item);
      }
    });
    this.itemsDisplayed = searchResult;
    console.log(this.itemsDisplayed);
  }

  clearSearchTag(): void {
    this.searchFormGroup.patchValue({
      tagFormControl: '',
    });
    this.itemsDisplayed = this.itemsList;
  }
}
