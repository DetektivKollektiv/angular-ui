import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemComponent } from './item-component.component';

@NgModule({
  declarations: [ItemComponent],
  imports: [CommonModule],
  exports: [ItemComponent]
})
export class ItemComponentModule {}
