import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCarouselComponent } from './question-carousel/question-carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SwiperModule } from 'swiper/angular';
import { QuestionsSwiperComponent } from '../../review-item/components/questions-swiper/questions-swiper.component';
@NgModule({
  declarations: [QuestionCarouselComponent,QuestionsSwiperComponent],
  imports: [
    CommonModule,
    IvyCarouselModule,
    SwiperModule
  ],
  exports:[QuestionCarouselComponent]
})
export class QuestionCarouselModule { }
