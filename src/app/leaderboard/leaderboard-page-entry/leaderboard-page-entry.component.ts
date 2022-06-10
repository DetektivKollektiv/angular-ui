import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'app-leaderboard-page-entry',
  templateUrl: './leaderboard-page-entry.component.html',
  styleUrls: ['./leaderboard-page-entry.component.scss']
})
export class LeaderboardPageEntryComponent implements OnInit {

  @Input() user: User;
  @Input() rank: number;

  colorClass='default';

  constructor() { }

  ngOnInit(): void {
    switch(this.rank){
      case 1: this.colorClass='gold';break;
      case 2: this.colorClass='silver';break;
      case 3: this.colorClass='bronze';break;
    }
  }

}
