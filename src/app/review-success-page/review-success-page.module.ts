import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewSuccessPageComponent } from './components/review-success-page/review-success-page.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { AuthModule } from '../shared/auth/auth.module';
import { OpenCaseListSliderModule } from '../shared/open-case-list-slider/open-case-list-slider.module';
import { HelperModule } from '../shared/helper/helper.module';

@NgModule({
  declarations: [ReviewSuccessPageComponent],
  exports: [
      HomeComponent,
  ],
  imports: [
    CommonModule,
    HelperModule,
    MaterialModule,
    OpenCaseListSliderModule,
    RouterModule,
    AuthModule
  ]
})

export class HomeModule { }
