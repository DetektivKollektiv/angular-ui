import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';
import { ItemsService } from '../../services/items.service';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss']
})
export class ReviewItemComponent implements OnInit {
  public itemToReview: Item;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItem().subscribe((item: Item) => {
      console.log(item);
      this.itemToReview = item;
    });
  }

  public reviewItem(review: boolean) {
    console.log(review);
    
    /*this.itemsService.reviewItem(review).subscribe(
      (result: Item) => console.log(result)
    );*/
  }
}
