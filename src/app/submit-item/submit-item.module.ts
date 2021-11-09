import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitComponent } from './components/submit/submit.component';
import { SubmitPageComponent } from './components/submit-page/submit-page.component';
import { MaterialModule } from '@shared/material/material.module';
import { HelperModule } from '@shared/helper/helper.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { OpenCaseListSliderModule } from '@shared/open-case-list-slider/open-case-list-slider.module';
import { QuestionCarouselModule } from '@shared/question-carousel/question-carousel.module';
import { FormsModule } from '@angular/forms';
import { ItemTypePipe } from './services/item-type.pipe';
import { ItemSourcePipe } from './services/item-source.pipe';
import { SubmitSuccessPageComponent } from './components/submit-success-page/submit-success-page.component';
import { SubmitNoAuthComponent } from './components/submit-no-auth/submit-no-auth.component';
import { BreadcrumbModule } from '@shared/breadcrumb/breadcrumb.module';
import { CaseListItemModule } from '@shared/case-list-item/case-list-item.module';
import { ButtonModule } from '@shared/button/button.module';
import { IconWithContentModule } from '@shared/icon-with-content/icon-with-content.module';
import { ShareModule } from '../shared/share/share.module';
import { SolvedCasesModule } from '../shared/solved-cases/solved-cases.module';
import { CaseDetailsModule } from '../shared/case-details/case-details.module';

@NgModule({
  declarations: [SubmitComponent, SubmitPageComponent, SubmitSuccessPageComponent, ItemTypePipe, ItemSourcePipe, SubmitNoAuthComponent],
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
    CaseListItemModule,
    BreadcrumbModule,
    ButtonModule,
    IconWithContentModule,
    ShareModule,
    SolvedCasesModule,
    CaseDetailsModule
  ]
})
export class SubmitItemModule {}
