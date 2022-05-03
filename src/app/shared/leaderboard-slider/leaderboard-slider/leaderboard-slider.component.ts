import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { Leaderboard } from 'src/app/core/model/leaderboard';
import { UserService } from 'src/app/core/services/user/user.service';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-leaderboard-slider',
  templateUrl: './leaderboard-slider.component.html',
  styleUrls: ['./leaderboard-slider.component.scss']
})
export class LeaderboardSliderComponent implements OnInit {
  @ViewChild('leaderboardSwiper', {static: false}) swiper?: SwiperComponent;
  leaderboard: Leaderboard;
  content = [];

  constructor(private user_service: UserService) {}

  ngOnInit(): void {
    this.user_service.getLeaderboard().then((leaderboard: Leaderboard) => {
      this.leaderboard = leaderboard;
      this.content = [
        {
          headline: 'Top Codetektiv*innen insgesamt',
          users: this.leaderboard.top_users
        },
        {
          headline: 'Top Codetektiv*innen auf deinem Level',
          users: this.leaderboard.top_users_by_level
        },
        {
          headline: 'Top Newcomer Codetektiv*innen',
          users: this.leaderboard.top_users_by_period
        }
      ];
    });
  }

  slideNext() {
    this.swiper.swiperRef.slideNext();
  }
  slidePrev() {
    this.swiper.swiperRef.slidePrev();
  }
}
