import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-score',
  templateUrl: './archive-score.component.html',
  styleUrls: ['./archive-score.component.scss'],
})
export class ArchiveScoreComponent implements OnInit {
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
