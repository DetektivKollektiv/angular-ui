import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '../../services/leaderboard.service';
import { Leaderboard } from '../../model/leaderboard';


@Component({
  selector: 'app-high-score-sidebar',
  templateUrl: './high-score-sidebar.component.html',
  styleUrls: ['./high-score-sidebar.component.scss']
})


export class HighScoreSidebarComponent implements OnInit {
  public expanded: boolean;
  public index: number;
  public leaderboard: Leaderboard;

  constructor(private leaderboardService: LeaderboardService) {
  }

  ngOnInit(): void {
    this.expanded = false;

    this.leaderboardService.getTopUsers()
      .then((leaderboard: Leaderboard) => {
        this.leaderboard = leaderboard;
      })
      .catch(err => {
        console.error(err);
      });
  }

  expand() {
    if (!this.expanded) {
      this.expanded = true;
    }
  }

  collapse() {
    if (this.expanded) {
      this.expanded = false;
    }
  }
}
