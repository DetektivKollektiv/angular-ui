import { Component, HostListener, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y
} from 'swiper/core';

SwiperCore.use([ Navigation, Pagination, A11y]);
@Component({
  selector: 'cases-list-swiper',
  templateUrl: './case-swiper.component.html',
  styleUrls: ['./case-swiper.component.scss'],
  inputs: ['cases']
})
export class CasesSwiperComponent implements OnInit {
  public cases: any[];

  constructor(
  ) {
  }

  ngOnInit(): void {

  }
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
