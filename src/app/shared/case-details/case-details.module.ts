import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [CaseDetailsComponent],
  exports: [CaseDetailsComponent],
  imports: [CommonModule, PipesModule]
})
export class CaseDetailsModule {}
