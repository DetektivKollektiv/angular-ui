import { Component, AfterViewInit, Input, OnDestroy } from '@angular/core';
import SwiperCore, { Navigation, Pagination, A11y, Swiper } from 'swiper/core';
import { Item } from '../../../model/item';

SwiperCore.use([Navigation, Pagination, A11y]);
@Component({
  selector: 'app-cases-list-swiper',
  templateUrl: './case-swiper.component.html',
  styleUrls: ['./case-swiper.component.scss']
})
export class CasesSwiperComponent implements AfterViewInit, OnDestroy {
  @Input() cases: Item[];
  swiper: Swiper;

  ngAfterViewInit() {
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
      // workaround for not clickable reject button on loop
      if (swiper.isEnd && (event.target as HTMLElement).className === 'reject-button') {
        swiper.slideNext();
      }
    });
  }

  ngOnDestroy() {
    this.swiper.destroy();
  }

  slideNext() {
    this.swiper.slideNext();
  }
}
