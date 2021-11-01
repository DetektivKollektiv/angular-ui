import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseFactsComponent } from './case-facts/case-facts.component';
import { TagIconModule } from '../tag-icon/tag-icon.module';
import { PipesModule } from '@shared/pipes/pipes.module';

@NgModule({
  declarations: [CaseFactsComponent],
  imports: [CommonModule, TagIconModule, PipesModule],
  exports: [CaseFactsComponent]
})
export class CaseFactsModule {}
