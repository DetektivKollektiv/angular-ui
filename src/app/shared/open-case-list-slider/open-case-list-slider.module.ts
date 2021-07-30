import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenCaseListSliderComponent } from './open-case-list-slider/open-case-list-slider.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [ OpenCaseListSliderComponent ],
  exports: [ OpenCaseListSliderComponent ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class OpenCaseListSliderModule { }
