import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continue-case-bar',
  templateUrl: './continue-case-bar.component.html',
  styleUrls: ['./continue-case-bar.component.scss'],
  inputs: ['cases']
})
export class CaseBarComponent implements OnInit {
  public cases: any[];
  constructor(
  ) {

  }

  ngOnInit(): void {
  }
}
