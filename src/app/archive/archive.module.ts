import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { HelperModule } from '../shared/helper/helper.module';
import { ArchiveComponent } from './components/archive/archive.component';
import { RouterModule } from '@angular/router';
import { ArchiveToolbarComponent } from './components/archive-toolbar/archive-toolbar.component';
import { ArchiveItemComponent } from './components/archive-item/archive-item.component';
import { ArchiveDetailsComponent } from './components/archive-details/archive-details.component';
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

registerLocaleData(localeDE, 'de')    ;
@NgModule({
  declarations: [
    ArchiveComponent,
    ArchiveToolbarComponent,
    ArchiveItemComponent,
    ArchiveDetailsComponent,
    RatingLegendComponent,
    ArchiveListComponent,
    ArchiveListItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HelperModule,
    RouterModule,
    ShareButtonsModule,
    ShareIconsModule,
    IvyCarouselModule,
    NgxPaginationModule,
    QuestionCarouselModule,
    NgxsModule.forFeature([ArchiveState]),
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'de-DE' },
    { provide: LOCALE_ID, useValue: 'de' },
  ],
})
export class ArchiveModule {}
