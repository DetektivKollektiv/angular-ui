import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { OpenCaseListSliderModule } from '../shared/open-case-list-slider/open-case-list-slider.module';
import { HelperModule } from '../shared/helper/helper.module';

@NgModule({
  declarations: [HomeComponent],
  exports: [
      HomeComponent,
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
