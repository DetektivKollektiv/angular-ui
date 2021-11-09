import { Component, Input } from '@angular/core';
import { Item } from '../../../model/item';
import { Factcheck } from '../../../model/factcheck';

@Component({
  selector: 'app-case-facts',
  templateUrl: './case-facts.component.html',
  styleUrls: ['./case-facts.component.scss']
})
export class CaseFactsComponent {
  @Input() case: Item;
  @Input() factCheck: Factcheck;

  maxTagsCount = 5;
  contentTextLength = 500;
}
