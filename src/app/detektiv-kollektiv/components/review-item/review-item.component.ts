import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';
import { ItemsService } from '../../services/items.service';
import { Review } from '../../model/review';
import { MatDialog } from '@angular/material/dialog';
import { ReviewResultDialogComponent } from '../dialogs/review-result-dialog/review-result-dialog.component';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss']
})
export class ReviewItemComponent implements OnInit {
  public itemToReview: Item;

  constructor(
    private resultDialog: MatDialog,
    private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.loadNewItem();
  }

  public reviewItem(review: boolean) {
    console.log(review);

    const reviewRequest: Review = { itemId: this.itemToReview.ItemId, goodReview: review };

    this.itemsService.reviewItem(reviewRequest).subscribe(
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

    dialogRef.afterClosed().subscribe(result => {
      this.loadNewItem();
    });
  }

  private loadNewItem(): void {
    this.itemsService.getItem().subscribe((item: Item) => {
      this.itemToReview = {...item};
    });
  }
}
