import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case-list-item',
  templateUrl: './case-list-item.component.html',
  styleUrls: ['./case-list-item.component.scss'],
})
export class CaseListItemComponent implements OnInit {
  @Input() case: any;
  public score: number;
  public color: string;
  constructor() { }

  ngOnInit(): void {
    this.score = Math.round(this.case.result_score * 25);

    if (this.score <= 33) {
      this.color = 'red';
    }
    if (this.score > 33 && this.score <= 66) {
      this.color = 'orange';
    }
    if (this.score > 66 && this.score <= 83) {
      this.color = 'light-green';
    }
    if (this.score > 84 && this.score <= 100) {
      this.color = 'green';
    }
  }

}
