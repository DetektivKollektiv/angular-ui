import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatsonComponent } from './watson/watson.component';
import { WatsonCardComponent } from './watson-card/watson-card.component';

@NgModule({
  declarations: [WatsonComponent, WatsonCardComponent],
  imports: [CommonModule],
  exports: [WatsonComponent, WatsonCardComponent]
})
export class WatsonModule {}
