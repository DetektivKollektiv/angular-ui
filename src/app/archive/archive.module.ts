import { CommonModule, registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { ActionLinkModule } from '@shared/action-link/action-link.module';
import { HelperModule } from '@shared/helper/helper.module';
import { MaterialModule } from '@shared/material/material.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ItemComponentModule } from './components/shared/item-component/item-component.module';

import { ArchiveDetailsPageComponent } from './components/archive-details-page/archive-details-page.component';
import { ArchiveItemComponent } from './components/archive-item/archive-item.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { RatingLegendComponent } from './components/rating-legend/rating-legend.component';
import { ArchiveState } from './state/archive.state';

import { CaseDetailsModule } from '@shared/case-details/case-details.module';
import { CaseListItemModule } from '@shared/case-list-item/case-list-item.module';
import { QuestionCarouselModule } from '@shared/question-carousel/question-carousel.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReviewItemModule } from 'src/app/review-item/review-item.module';

import { BreadcrumbModule } from '@shared/breadcrumb/breadcrumb.module';
import { ButtonModule } from '@shared/button/button.module';
import { CaseFactsModule } from '@shared/case-facts/case-facts.module';
import { CaseResultCardModule } from '@shared/case-result-card/case-result-card.module';
import { CommentInputModule } from '@shared/comment-input/comment-input.module';
import { DetectiveItemModule } from '@shared/detective-item/detective-item.module';
import { EdgyBackgroundModule } from '@shared/edgy-background/edgy-background.module';
import { PipesModule } from '@shared/pipes/pipes.module';
import { TagIconModule } from '@shared/tag-icon/tag-icon.module';
import { ReviewResponsesComponent } from './components/review-responses/review-responses.component';
import { ArchiveDetailsTopModule } from './components/archive-details-page/archive-details-top/archive-details-top.module';
import { ArchiveDetailsRatingModule } from './components/archive-details-page/archive-details-rating/archive-details-rating.module';
import { ArchiveDetailsEvaluationModule } from './components/archive-details-page/archive-details-evaluation/archive-details-evaluation.module';
import { ArchiveDetailsCommentsModule } from './components/archive-details-page/archive-details-comments/archive-details-comments.module';
import { CaseSortByPipe } from './services/case-sort-by.pipe';

registerLocaleData(localeDE, 'de');
@NgModule({
  declarations: [
    ArchiveComponent,
    ArchiveDetailsPageComponent,
    RatingLegendComponent,
    CaseSortByPipe,
    ReviewResponsesComponent,
    ArchiveItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HelperModule,
    RouterModule,
    ShareButtonsModule,
    ShareIconsModule,
    IvyCarouselModule,
    NgxPaginationModule,
    QuestionCarouselModule,
    CaseDetailsModule,
    NgxsModule.forFeature([ArchiveState]),
    ReviewItemModule,
    CaseListItemModule,
    BreadcrumbModule,
    CaseFactsModule,
    TagIconModule,
    CaseResultCardModule,
    DetectiveItemModule,
    EdgyBackgroundModule,
    CommentInputModule,
    PipesModule,
    ArchiveDetailsTopModule,
    ArchiveDetailsRatingModule,
    ArchiveDetailsEvaluationModule,
    ArchiveDetailsCommentsModule,
    ItemComponentModule,
    ActionLinkModule,
    ButtonModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'de-DE' },
    { provide: LOCALE_ID, useValue: 'de' }
  ]
})
export class ArchiveModule {}
