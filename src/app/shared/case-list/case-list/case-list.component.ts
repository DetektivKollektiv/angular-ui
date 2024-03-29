import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss'],
})
export class CaseListComponent implements OnInit {
  @Input() cases: any[];
  @Input() numberOfCases: number;
  @Input() showText: boolean;
  public showCases: any[];

  constructor() { }

  ngOnInit(): void {
    if (this.numberOfCases === null) {
      this.numberOfCases = this.cases.length;
    }

    const arrayForSort = [...this.cases];
    this.showCases = arrayForSort.splice(0, this.numberOfCases);
  }

}
