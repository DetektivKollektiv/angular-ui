import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { OpenCaseListSliderModule } from '../shared/open-case-list-slider/open-case-list-slider.module';
import { HelperModule } from '../shared/helper/helper.module';
import { OpenReviewComponent } from './components/open-review/open-review.component';

@NgModule({
  declarations: [HomeComponent, OpenReviewComponent],
  exports: [
      HomeComponent,
      OpenReviewComponent
  ],
  imports: [
    CommonModule,
    HelperModule,
    MaterialModule,
    OpenCaseListSliderModule,
    RouterModule,
  ]
})

export class HomeModule { }
