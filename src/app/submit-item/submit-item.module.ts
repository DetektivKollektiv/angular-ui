import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitComponent } from './components/submit/submit.component';
import { SubmitPageComponent } from './components/submit-page/submit-page.component';
import { MaterialModule } from '../shared/material/material.module';
import { HelperModule } from '../shared/helper/helper.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { OpenCaseListSliderModule } from '../shared/open-case-list-slider/open-case-list-slider.module';
import { QuestionCarouselModule } from '../shared/question-carousel/question-carousel.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SubmitComponent, SubmitPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    HelperModule,
    RouterModule,
    IvyCarouselModule,
    OpenCaseListSliderModule,
    TranslateModule.forChild(),
    QuestionCarouselModule,
  ],
})
export class SubmitItemModule {}
