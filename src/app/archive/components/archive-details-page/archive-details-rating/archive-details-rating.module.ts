import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActionLinkModule } from '@shared/action-link/action-link.module';
import { ArchiveDetailsRatingComponent } from './archive-details-rating.component';

@NgModule({
  declarations: [ArchiveDetailsRatingComponent],
  imports: [CommonModule, ActionLinkModule],
  exports: [ArchiveDetailsRatingComponent]
})
export class ArchiveDetailsRatingModule {}
