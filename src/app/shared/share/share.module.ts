import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share/share.component';
import { ShareItemComponent } from './share-item/share-item.component';

@NgModule({
  declarations: [ShareComponent, ShareItemComponent],
  imports: [CommonModule],
  exports: [ShareComponent, ShareItemComponent]
})
export class ShareModule {}
