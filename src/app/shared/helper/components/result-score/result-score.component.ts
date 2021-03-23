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
