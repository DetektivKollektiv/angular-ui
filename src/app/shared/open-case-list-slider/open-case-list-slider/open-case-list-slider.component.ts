import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-open-case-list-slider',
  templateUrl: './open-case-list-slider.component.html',
  styleUrls: ['./open-case-list-slider.component.scss'],
  inputs: ['cases']
})
export class OpenCaseListSliderComponent implements OnInit {
  cases: any[];
  case: any;

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.case = this.cases[0];
  }

}
