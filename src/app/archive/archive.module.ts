import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { HelperModule } from '../shared/helper/helper.module';
import { ArchiveComponent } from './components/archive/archive.component';
import { RouterModule } from '@angular/router';
import { ArchiveItemComponent } from './components/archive-item/archive-item.component';
import { ArchiveDetailsComponent } from './components/archive-details/archive-details.component';
import { ArchiveDetailsPageComponent } from './components/archive-details-page/archive-details-page.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { NgxsModule } from '@ngxs/store';
import { ArchiveState } from './state/archive.state';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { RatingLegendComponent } from './components/rating-legend/rating-legend.component';
import { ArchiveListComponent } from './components/archive-list/archive-list.component';
import { ArchiveListItemComponent } from './components/archive-list-item/archive-list-item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { QuestionCarouselModule } from '../shared/question-carousel/question-carousel.module';
import { CaseDetailsModule } from '../shared/case-details/case-details.module';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentListItemComponent } from './components/comment-list-item/comment-list-item.component';
import { CommentInputComponent } from './components/comment-input/comment-input.component';
import { ReviewItemModule } from 'src/app/review-item/review-item.module';
import { CaseListItemModule } from '../shared/case-list-item/case-list-item.module';
import { ArchiveListFilterComponent } from './components/archive-list-filter/archive-list-filter.component';
import { CaseSortByPipe } from './services/case-sort-by.pipe';
import { BreadcrumbModule } from '../shared/breadcrumb/breadcrumb.module';
import { CaseFactsModule } from '../shared/case-facts/case-facts.module';
import { TagIconModule } from '../shared/tag-icon/tag-icon.module';
import { CaseResultCardModule } from '../shared/case-result-card/case-result-card.module';

registerLocaleData(localeDE, 'de');
@NgModule({
  declarations: [
    ArchiveComponent,
    ArchiveItemComponent,
    ArchiveDetailsComponent,
    ArchiveDetailsPageComponent,
    RatingLegendComponent,
    ArchiveListComponent,
    ArchiveListItemComponent,
    CommentListComponent,
    CommentListItemComponent,
    CommentInputComponent,
    ArchiveListFilterComponent,
    CaseSortByPipe,
    CommentInputComponent
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
    CaseResultCardModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'de-DE' },
    { provide: LOCALE_ID, useValue: 'de' }
  ]
})
export class ArchiveModule {}
