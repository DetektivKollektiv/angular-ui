import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-list-item',
  templateUrl: './case-list-item.component.html',
  styleUrls: ['./case-list-item.component.scss'],
  inputs: ['case']
})
export class CaseListItemComponent implements OnInit {
  case: any;
  constructor() { }

  ngOnInit(): void {
  }

}
