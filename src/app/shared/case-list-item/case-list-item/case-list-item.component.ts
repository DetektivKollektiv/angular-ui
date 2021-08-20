import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case-list-item',
  templateUrl: './case-list-item.component.html',
  styleUrls: ['./case-list-item.component.scss'],
})
export class CaseListItemComponent implements OnInit {
  @Input() case: any;
  public score: number;
  constructor() { }

  ngOnInit(): void {
    this.score = Math.round(this.case.result_score * 25)
  }

}
