import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenCaseListSliderComponent } from './open-case-list-slider/open-case-list-slider.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { CasesSwiperComponent } from './case-swiper/case-swiper.component';
import { CaseBarComponent } from './continue-case-bar/case-bar.component';
@NgModule({
  declarations: [ OpenCaseListSliderComponent, CasesSwiperComponent, CaseBarComponent ],
  exports: [ OpenCaseListSliderComponent, CaseBarComponent ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
  ]
})

export class OpenCaseListSliderModule { }
