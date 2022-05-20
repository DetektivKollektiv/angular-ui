import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'app-leaderboard-element',
  templateUrl: './leaderboard-element.component.html',
  styleUrls: ['./leaderboard-element.component.scss']
})
export class LeaderboardElementComponent implements OnInit {
  @Input() rank: number;
  @Input() user: User;

  height;
  medalColorClass;

  constructor() {}

  ngOnInit(): void {
    switch (this.rank) {
      case 1:
        this.height = '70px';
        this.medalColorClass = 'goldMedal';
        break;
      case 2:
        this.height = '55px';
        this.medalColorClass = 'silverMedal';
        break;
      case 3:
        this.height = '40px';
        this.medalColorClass = 'bronzeMedal';
        break;
    }
  }
}
