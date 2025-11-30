import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActionLinkModule } from '@shared/action-link/action-link.module';
import { MaterialModule } from '@shared/material/material.module';
import { SwiperModule } from 'swiper/angular';
import { ContentTagComponentModule } from '../../shared/content-tag/content-tag.module';
import { ArchiveDetailsEvaluationComponent } from './archive-details-evaluation.component';

@NgModule({
  declarations: [ArchiveDetailsEvaluationComponent],
  imports: [CommonModule, ActionLinkModule, MaterialModule, MatIconModule, ContentTagComponentModule, SwiperModule],
  exports: [ArchiveDetailsEvaluationComponent]
})
export class ArchiveDetailsEvaluationModule {}

