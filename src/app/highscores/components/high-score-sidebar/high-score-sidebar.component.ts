import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '../../services/leaderboard.service';
import { Leaderboard } from '../../model/leaderboard';


@Component({
  selector: 'app-high-score-sidebar',
  templateUrl: './high-score-sidebar.component.html',
  styleUrls: ['./high-score-sidebar.component.scss']
})


export class HighScoreSidebarComponent implements OnInit {
  public index: number;
  public leaderboard: Leaderboard;

  constructor(private leaderboardService: LeaderboardService) {
  }

  ngOnInit(): void {

    this.leaderboardService.getTopUsers()
      .then((leaderboard: Leaderboard) => {
        this.leaderboard = leaderboard;
      })
      .catch(err => {
        console.error(err);
      });
  }

}
