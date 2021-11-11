import { Component, Input } from '@angular/core';
import { from } from 'rxjs';
import { Item } from '../../../model/item';
import { ItemsService } from '../../../review-item/services/items/items.service';

@Component({
  selector: 'app-open-case-list-slider',
  templateUrl: './open-case-list-slider.component.html',
  styleUrls: ['./open-case-list-slider.component.scss']
})
export class OpenCaseListSliderComponent {
  @Input() cases: Item[];

  reviewItems$ = from(this.itemsService.getOpenItems());

  constructor(private itemsService: ItemsService) {}
}
