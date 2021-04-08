import { Component, Input, OnInit } from '@angular/core';
import { ResultScoreMode } from './result-score-mode';

@Component({
  selector: 'app-result-score',
  templateUrl: './result-score.component.html',
  styleUrls: ['./result-score.component.scss'],
})
export class ResultScoreComponent implements OnInit {
  @Input() public score: number;

  @Input() public mode: ResultScoreMode;

  public resultScoreMode = ResultScoreMode;

  constructor() {}

  ngOnInit(): void {}

  get fillPercentage(): string {
    return `${(100 / 4) * this.score}%`;
  }

  get title(): string {
    if (this.score < 2) {
      return 'nicht vertrauenswürdig';
    } else if (this.score < 3) {
      return 'eher nicht vertrauenswürdig';
    } else if (this.score < 3.5) {
      return 'eher vertrauenswürdig';
    } else if (this.score >= 3.5) {
      return 'vertrauenswürdig';
    } else {
      throw new Error('');
    }
  }
}
