import { Component, Input } from '@angular/core';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-continue-case-bar',
  templateUrl: './continue-case-bar.component.html',
  styleUrls: ['./continue-case-bar.component.scss']
})
export class CaseBarComponent {
  @Input() item: Item;
}
