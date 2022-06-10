import { Component, AfterViewInit, Input, OnDestroy, ViewChild } from '@angular/core';
import SwiperCore, { Navigation, Pagination, A11y, Swiper } from 'swiper/core';
import { SwiperComponent } from 'swiper/angular';
import { Item } from '../../../model/item';

SwiperCore.use([Navigation, Pagination, A11y]);
@Component({
  selector: 'app-cases-list-swiper',
  templateUrl: './case-swiper.component.html',
  styleUrls: ['./case-swiper.component.scss']
})
export class CasesSwiperComponent {
  @ViewChild('swiper', {static: false}) swiper?: SwiperComponent;
  @Input() cases: Item[];

  slideNext() {
    this.swiper.swiperRef.slideNext();
  }

  slidePrev() {
    this.swiper.swiperRef.slidePrev();
  }
}
