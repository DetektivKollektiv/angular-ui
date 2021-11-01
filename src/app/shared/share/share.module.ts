import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [ShareComponent],
  imports: [CommonModule],
  exports: [ShareComponent]
})
export class ShareModule {}
