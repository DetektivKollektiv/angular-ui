import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitComponent } from './components/submit/submit.component';
import { SubmitPageComponent } from './components/submit-page/submit-page.component';
import { SubmitSuccessPageComponent } from './components/submit-success-page/submit-success-page.component';
import { MaterialModule } from '../shared/material/material.module';
import { HelperModule } from '../shared/helper/helper.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { QuestionCarouselModule } from '../shared/question-carousel/question-carousel.module';
@NgModule({
  declarations: [SubmitComponent, SubmitPageComponent,SubmitSuccessPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    HelperModule,
    RouterModule,
    IvyCarouselModule,
    TranslateModule.forChild(),
    QuestionCarouselModule
  ]
})
export class SubmitItemModule {
}
