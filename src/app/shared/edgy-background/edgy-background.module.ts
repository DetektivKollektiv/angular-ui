import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgyBackgroundComponent } from './edgy-background/edgy-background.component';
import { EdgyBorderComponent } from './edgy-border/edgy-border/edgy-border.component';

@NgModule({
  declarations: [EdgyBackgroundComponent, EdgyBorderComponent],
  imports: [CommonModule],
  exports: [EdgyBackgroundComponent, EdgyBorderComponent]
})
export class EdgyBackgroundModule {}
