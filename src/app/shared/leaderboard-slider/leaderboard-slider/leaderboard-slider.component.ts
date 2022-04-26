import { Component, OnInit } from '@angular/core';
import { Leaderboard } from 'src/app/core/model/leaderboard';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-leaderboard-slider',
  templateUrl: './leaderboard-slider.component.html',
  styleUrls: ['./leaderboard-slider.component.scss']
})
export class LeaderboardSliderComponent implements OnInit {
  leaderboard: Leaderboard;

  constructor(user_service: UserService) {
    user_service.getLeaderboard().then((leaderboard: Leaderboard) => {
      this.leaderboard = leaderboard;
    });
  }

  ngOnInit(): void {}
}

