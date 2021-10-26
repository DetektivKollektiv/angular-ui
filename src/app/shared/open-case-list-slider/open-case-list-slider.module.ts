import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenCaseListSliderComponent } from './open-case-list-slider/open-case-list-slider.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { CasesSwiperComponent } from './case-swiper/case-swiper.component';
import { CaseBarComponent } from './continue-case-bar/continue-case-bar.component';
import { ButtonModule } from '../button/button.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [OpenCaseListSliderComponent, CasesSwiperComponent, CaseBarComponent],
  exports: [OpenCaseListSliderComponent, CaseBarComponent],
  imports: [CommonModule, RouterModule, SwiperModule, ButtonModule, PipesModule]
})
export class OpenCaseListSliderModule {}
