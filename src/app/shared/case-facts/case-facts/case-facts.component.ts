import { Component, Input } from '@angular/core';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-case-facts',
  templateUrl: './case-facts.component.html',
  styleUrls: ['./case-facts.component.scss']
})
export class CaseFactsComponent {
  @Input() case: Item;

  maxTagsCount = 5;
}
