import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenCaseListSliderComponent } from './open-case-list-slider/open-case-list-slider.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { CasesSwiperComponent } from './case-swiper/case-swiper.component';
@NgModule({
  declarations: [ OpenCaseListSliderComponent, CasesSwiperComponent ],
  exports: [ OpenCaseListSliderComponent ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
  ]
})

export class OpenCaseListSliderModule { }
