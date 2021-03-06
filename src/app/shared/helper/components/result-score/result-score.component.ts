import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-score',
  templateUrl: './result-score.component.html',
  styleUrls: ['./result-score.component.scss'],
})
export class ResultScoreComponent implements OnInit {
  @Input() public score: number;

  constructor() {}

  ngOnInit(): void {}

  get title(): string {
    switch (this.score.toPrecision(1)) {
      case '1': {
        return 'nicht vertrauenswürdig';
      }
      case '2': {
        return 'eher nicht vertrauenswürdig';
      }
      case '3': {
        return 'eher vertrauenswürdig';
      }
      case '4': {
        return 'vertrauenswürdig';
      }
      default: {
      }
    }
  }
}
