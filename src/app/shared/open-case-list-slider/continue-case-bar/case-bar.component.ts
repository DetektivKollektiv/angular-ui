import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continue-case-bar',
  templateUrl: './case-bar.component.html',
  styleUrls: ['./case-bar.component.scss'],
  inputs: ['cases']
})
export class CaseBarComponent implements OnInit {
  public cases: any[]
  constructor(
  ) {

  }

  ngOnInit(): void {
  }
}
