import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DetectiveItemComponent,
  DetectiveItemContentDirective,
  DetectiveItemSuffixDirective
} from './detective-item/detective-item.component';
import { DetectiveListComponent } from './detective-list/detective-list.component';

@NgModule({
  declarations: [DetectiveItemComponent, DetectiveListComponent, DetectiveItemContentDirective, DetectiveItemSuffixDirective],
  imports: [CommonModule],
  exports: [DetectiveItemComponent, DetectiveListComponent, DetectiveItemContentDirective, DetectiveItemSuffixDirective]
})
export class DetectiveItemModule {}
