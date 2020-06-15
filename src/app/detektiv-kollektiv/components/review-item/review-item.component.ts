import {Component, OnInit} from '@angular/core';
import {Item} from '../../model/item';
import {ItemsService} from '../../services/items/items.service';
import {Review} from '../../model/review';
import {MatDialog} from '@angular/material/dialog';
import {ReviewResultDialogComponent} from '../dialogs/review-result-dialog/review-result-dialog.component';
import {LoaderService} from '../../../shared/loader/service/loader.service';
import {ReviewsService} from '../../services/reviews/reviews.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss']
})
export class ReviewItemComponent implements OnInit {
  public itemToReview: Item;
  public reviewForm: FormGroup;

  constructor(private resultDialog: MatDialog,
              private formBuilder: FormBuilder,
              private itemsService: ItemsService,
              private reviewsService: ReviewsService,
              private loaderService: LoaderService) {
    this.reviewForm = formBuilder.group({
      text: ['', [Validators.required]],
      source: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadNewItem();
  }

  public reviewItem(review: boolean) {
    const reviewRequest: Review = {
      itemId: this.itemToReview.ItemId,
      text: this.reviewForm.value.text,
      source: this.reviewForm.value.source,
      goodReview: review
    };
    this.loaderService.show();
    this.reviewsService.reviewItem(reviewRequest).then((result: Item) => {
      this.loaderService.hide();
      this.openDialog(result);
    });
  }

  public openDialog(item: Item): void {
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
    this.reviewForm.reset();

    this.itemsService.getItem().then(value => {
      this.loaderService.hide();
      this.itemToReview = {...value};
    });
  }
}
