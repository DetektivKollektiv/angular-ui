import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { HelperModule } from '../shared/helper/helper.module';
import { ArchiveComponent } from './components/archive/archive.component';
import { RouterModule } from '@angular/router';
import { ArchiveToolbarComponent } from './components/archive-toolbar/archive-toolbar.component';
import { ArchiveItemComponent } from './components/archive-item/archive-item.component';
import { ArchiveScoreComponent } from './components/archive-score/archive-score.component';
import { ArchiveDetailsComponent } from './components/archive-details/archive-details.component';

@NgModule({
  declarations: [
    ArchiveComponent,
    ArchiveToolbarComponent,
    ArchiveItemComponent,
    ArchiveScoreComponent,
    ArchiveDetailsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HelperModule,
    RouterModule,
  ],
})
export class ArchiveModule {}
