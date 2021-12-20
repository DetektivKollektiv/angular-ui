import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseFactsComponent } from './case-facts/case-facts.component';
import { TagIconModule } from '@shared/tag-icon/tag-icon.module';
import { PipesModule } from '@shared/pipes/pipes.module';
import { WatsonModule } from '@shared/watson/watson.module';

@NgModule({
  declarations: [CaseFactsComponent],
  imports: [CommonModule, TagIconModule, PipesModule, WatsonModule],
  exports: [CaseFactsComponent]
})
export class CaseFactsModule {}
