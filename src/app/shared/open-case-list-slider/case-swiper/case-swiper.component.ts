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

  ngOnDestroy() {
    this.swiper.destroy();
  }

  slideNext() {
    this.swiper.slideNext();
  }

  slidePrev() {
    this.swiper.slidePrev();
  }
}
