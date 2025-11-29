import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActionLinkModule } from '@shared/action-link/action-link.module';
import { ItemComponentModule } from '../item-component.module';
import { ArchiveDetailsTopComponent } from './archive-details-top.component';

@NgModule({
  declarations: [ArchiveDetailsTopComponent],
  imports: [CommonModule, ActionLinkModule, ItemComponentModule],
  exports: [ArchiveDetailsTopComponent]
})
export class ArchiveDetailsTopModule {}

