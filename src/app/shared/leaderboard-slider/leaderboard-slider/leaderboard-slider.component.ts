import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { LeaderboardCategory } from 'src/app/core/model/leaderboard';
import { UserService } from 'src/app/core/services/user/user.service';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-leaderboard-slider',
  templateUrl: './leaderboard-slider.component.html',
  styleUrls: ['./leaderboard-slider.component.scss']
})
export class LeaderboardSliderComponent implements OnInit {
  @ViewChild('leaderboardSwiper', { static: false }) swiper?: SwiperComponent;
  leaderboard?;

  constructor(private user_service: UserService) {
    user_service.getLeaderboard().then((leaderboard: [LeaderboardCategory]) => {
      this.leaderboard = leaderboard;
    });
  }

  ngOnInit(): void {
    // this.user_service.getLeaderboard().then((leaderboard: [LeaderboardCategory]) => {
    //   this.leaderboard = leaderboard;
    // });
  }

  slideNext() {
    this.swiper.swiperRef.slideNext();
  }
  slidePrev() {
    this.swiper.swiperRef.slidePrev();
  }
}
