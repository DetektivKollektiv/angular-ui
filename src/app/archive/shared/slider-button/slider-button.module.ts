import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SliderButtonComponent } from './slider-button.component';

@NgModule({
  declarations: [SliderButtonComponent],
  imports: [CommonModule, MatIconModule],
  exports: [SliderButtonComponent]
})
export class SliderButtonModule {}
