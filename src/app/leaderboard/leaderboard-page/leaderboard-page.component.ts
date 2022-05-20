import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';
import { LeaderboardCategory } from 'src/app/core/model/leaderboard';
import { UserService } from 'src/app/core/services/user/user.service';
import Swiper from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-leaderboard-page',
  templateUrl: './leaderboard-page.component.html',
  styleUrls: ['./leaderboard-page.component.scss']
})
export class LeaderboardPageComponent implements OnInit {
  @ViewChild('leaderboardPageSwiper', { static: false }) swiper?: SwiperComponent;
  @Input() currentIndex = 0;

  nextIndex = 1;
  prevIndex = 2;
  leaderboard = [];

  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Leaderboard' }];

  constructor(private user_service: UserService) {}

  ngOnInit(): void {
    this.user_service.getLeaderboard().then((leaderboard: [LeaderboardCategory]) => (this.leaderboard = leaderboard));
  }

  calculateIndexes() {
    this.currentIndex = this.swiper.swiperRef.realIndex;
    this.nextIndex = this.currentIndex < 2 ? this.currentIndex + 1 : 0;
    this.prevIndex = this.currentIndex > 0 ? this.currentIndex - 1 : 2;
  }

  slideNext() {
    this.swiper.swiperRef.slideNext();
  }
  slidePrev() {
    this.swiper.swiperRef.slidePrev();
  }
}

