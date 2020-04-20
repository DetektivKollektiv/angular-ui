import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';
import { ItemsService } from '../../services/items.service';
import { Review } from '../../model/review';
import { MatDialog } from '@angular/material/dialog';
import { ReviewResultDialogComponent } from '../dialogs/review-result-dialog/review-result-dialog.component';
import {finalize} from 'rxjs/operators';
import {LoaderService} from '../../../shared/loader/service/loader.service';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss']
})
export class ReviewItemComponent implements OnInit {
  public itemToReview: Item;

  constructor(private resultDialog: MatDialog,
              private itemsService: ItemsService,
              private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loadNewItem();
  }

  public reviewItem(review: boolean) {
    const reviewRequest: Review = { itemId: this.itemToReview.ItemId, goodReview: review };
    this.loaderService.show();
    this.itemsService.reviewItem(reviewRequest).pipe(
      finalize(() => this.loaderService.hide())
    ).subscribe(
      (result: Item) => {
        this.openDialog(result);
      }
    );
  }

  openDialog(item: Item): void {

    const dialogRef = this.resultDialog.open(ReviewResultDialogComponent, {
      width: '500px',
      data: item
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadNewItem();
    });
  }

  private loadNewItem(): void {
    this.loaderService.show();

    this.itemsService.getItem().pipe(
      finalize(() => this.loaderService.hide())
    ).subscribe((item: Item) => {
      this.itemToReview = {...item};
    });
  }
}
