import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenCaseListSliderComponent } from './open-case-list-slider/open-case-list-slider.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { CasesSwiperComponent } from './case-swiper/case-swiper.component';
import { CaseBarComponent } from './continue-case-bar/continue-case-bar.component';
import { SubmitSuccessPageComponent } from 'src/app/submit-item/components/submit-success-page/submit-success-page.component';

@NgModule({
  declarations: [ OpenCaseListSliderComponent, CasesSwiperComponent, CaseBarComponent, SubmitSuccessPageComponent ],
  exports: [ OpenCaseListSliderComponent, CaseBarComponent, SubmitSuccessPageComponent ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
  ]
})

export class OpenCaseListSliderModule { }
