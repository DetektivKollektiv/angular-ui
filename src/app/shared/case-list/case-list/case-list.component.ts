import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss'],
  inputs: ['cases']
})
export class CaseListComponent implements OnInit {
  cases: any[];

  constructor() { }

  ngOnInit(): void {

  }

}
