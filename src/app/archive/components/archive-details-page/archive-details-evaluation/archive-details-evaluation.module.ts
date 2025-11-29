import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActionLinkModule } from '@shared/action-link/action-link.module';
import { MaterialModule } from '@shared/material/material.module';
import { ItemComponentModule } from '../../shared/item-component/item-component.module';
import { ArchiveDetailsEvaluationComponent } from './archive-details-evaluation.component';

@NgModule({
  declarations: [ArchiveDetailsEvaluationComponent],
  imports: [CommonModule, ActionLinkModule, MaterialModule, ItemComponentModule],
  exports: [ArchiveDetailsEvaluationComponent]
})
export class ArchiveDetailsEvaluationModule {}
