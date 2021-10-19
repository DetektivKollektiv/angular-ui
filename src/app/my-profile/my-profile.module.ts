import { LOCALE_ID, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';
import { CommonModule } from '@angular/common';
import { HelperModule } from '@shared/helper/helper.module';
import { MaterialModule } from '@shared/material/material.module';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ScoreListComponent } from './components/score-list/score-list.component';
import { SolveScoreListComponent } from './components/solve-score-list/solve-score-list.component';
import { ScoreListItemComponent } from './components/score-list-item/score-list-item.component';
import { CaseListModule } from '@shared/case-list/case-list.module';
import { OpenCaseListSliderModule } from '@shared/open-case-list-slider/open-case-list-slider.module';
import { NgxPaginationModule } from 'ngx-pagination';

registerLocaleData(localeDE, 'de')    ;
@NgModule({
  declarations: [
    MyProfileComponent,
    ScoreListComponent,
    ScoreListItemComponent,
    SolveScoreListComponent
  ],
  imports: [
    CommonModule,
    HelperModule,
    MaterialModule,
    NgxPaginationModule,
    CaseListModule,
    OpenCaseListSliderModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'de-DE' },
    { provide: LOCALE_ID, useValue: 'de' },
  ],
})
export class MyProfileModule {}
