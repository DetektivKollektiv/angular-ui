import { Component, AfterViewInit, Input } from '@angular/core';
import SwiperCore, { Navigation, Pagination, A11y, Swiper } from 'swiper/core';
import { Item } from '../../../model/item';

SwiperCore.use([Navigation, Pagination, A11y]);
@Component({
  selector: 'app-cases-list-swiper',
  templateUrl: './case-swiper.component.html',
  styleUrls: ['./case-swiper.component.scss']
})
export class CasesSwiperComponent implements AfterViewInit {
  @Input() cases: Item[];
  swiper: Swiper;

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 50,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
      // breakpoints: {
      //   1024: {
      //       slidesPerView: 1,
      //       spaceBetween: 40,
      //   },
      //   768: {
      //       slidesPerView: 1,
      //       spaceBetween: 30,
      //   },
      //   640: {
      //       slidesPerView: 1,
      //       spaceBetween: 20,
      //   },
      //   320: {
      //       slidesPerView: 1,
      //       spaceBetween: 10,
      //   }
      // }
    });
  }

  slideNext() {
    this.swiper.slideNext();
  }
}
