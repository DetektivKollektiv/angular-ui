import { Component, Input } from '@angular/core';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-case-list-item',
  templateUrl: './case-list-item.component.html',
  styleUrls: ['./case-list-item.component.scss']
})
export class CaseListItemComponent {
  @Input() case: Item;
  @Input() showContent: boolean;
  @Input() link: string;
}
