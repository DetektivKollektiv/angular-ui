import { AfterViewInit, Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, A11y, Swiper } from 'swiper/core';
import { Leaderboard } from 'src/app/core/model/leaderboard';
import { UserService } from 'src/app/core/services/user/user.service';

SwiperCore.use([Navigation, Pagination, A11y]);
@Component({
  selector: 'app-leaderboard-slider',
  templateUrl: './leaderboard-slider.component.html',
  styleUrls: ['./leaderboard-slider.component.scss']
})
export class LeaderboardSliderComponent implements OnInit, AfterViewInit {
  leaderboard: Leaderboard;
  category = 0;
  content = [];
  swiper: Swiper;

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

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 50,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      loop: true
    });
    this.swiper.on('click', (swiper, event) => {
      // workaround for not clickable buttons on loop
      if (!swiper.isBeginning && !swiper.isEnd) {
        return;
      }
      if ((event.target as HTMLElement).classList.contains('slide-next')) {
        swiper.slideNext();
        return;
      }
      if ((event.target as HTMLElement).classList.contains('slide-prev')) {
        swiper.slidePrev();
        return;
      }
    });
  }

  slide(next: boolean) {
    if (next) {
      this.category = this.category < 2 ? this.category + 1 : 0;
      this.swiper.slideNext();
    } else {
      this.category = this.category > 0 ? this.category - 1 : 2;
      this.swiper.slidePrev();
    }
  }
}
