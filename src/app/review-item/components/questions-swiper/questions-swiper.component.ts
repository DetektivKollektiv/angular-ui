import { Component, HostListener, Input, OnInit } from '@angular/core';
import SwiperCore from 'swiper/core';

@Component({
  selector: 'app-questions-swiper',
  templateUrl: './questions-swiper.component.html',
  styleUrls: ['./questions-swiper.component.scss'],
})
export class QuestionsSwiperComponent implements OnInit {
  @Input() public questions: any[];

  constructor() { }

  ngOnInit(): void {
  }
  onSwiper(swiper) {
  }
  onSlideChange() {
  }
}
