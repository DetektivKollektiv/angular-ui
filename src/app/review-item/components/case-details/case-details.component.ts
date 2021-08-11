import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss'],
  inputs: ['case','caseId']
})
export class CaseDetailsComponent implements OnInit {
  case: any;
  caseId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
