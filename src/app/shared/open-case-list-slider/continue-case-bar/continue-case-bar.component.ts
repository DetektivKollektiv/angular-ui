import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-continue-case-bar',
  templateUrl: './continue-case-bar.component.html',
  styleUrls: ['./continue-case-bar.component.scss'],
})
export class CaseBarComponent implements OnInit {
  @Input() public cases: any[];
  constructor(
  ) {

  }

  ngOnInit(): void {
  }
}
