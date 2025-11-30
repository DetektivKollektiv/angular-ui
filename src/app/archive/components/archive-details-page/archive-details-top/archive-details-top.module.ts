import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActionLinkModule } from '@shared/action-link/action-link.module';
import { ContentTagComponentModule } from '../../shared/content-tag/content-tag.module';
import { ArchiveDetailsTopComponent } from './archive-details-top.component';

@NgModule({
  declarations: [ArchiveDetailsTopComponent],
  imports: [CommonModule, ActionLinkModule, ContentTagComponentModule],
  exports: [ArchiveDetailsTopComponent]
})
export class ArchiveDetailsTopModule {}
