import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseResultCardComponent } from './case-result-card/case-result-card.component';
import { PipesModule } from '@shared/pipes/pipes.module';

@NgModule({
  declarations: [CaseResultCardComponent],
  imports: [CommonModule, PipesModule],
  exports: [CaseResultCardComponent]
})
export class CaseResultCardModule {}
