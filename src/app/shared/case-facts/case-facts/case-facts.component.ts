import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-case-facts',
  templateUrl: './case-facts.component.html',
  styleUrls: ['./case-facts.component.scss']
})
export class CaseFactsComponent implements OnInit {
  @Input() case: Item;

  constructor() {}

  ngOnInit(): void {}
}
