import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    ArchiveComponent,
    ArchiveToolbarComponent,
    ArchiveItemComponent,
    ArchiveDetailsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HelperModule,
    RouterModule,
    ShareButtonsModule,
    ShareIconsModule,
    NgxsModule.forFeature([ArchiveState]),
  ],
})
export class ArchiveModule {}
