import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { SwiperModule } from 'swiper/angular';
import { SliderButtonModule } from '../../../shared/slider-button/slider-button.module';
import { ArchiveDetailsCommentsComponent } from './archive-details-comments.component';

@NgModule({
  declarations: [ArchiveDetailsCommentsComponent],
  imports: [CommonModule, MaterialModule, SwiperModule, SliderButtonModule],
  exports: [ArchiveDetailsCommentsComponent]
})
export class ArchiveDetailsCommentsModule {}
