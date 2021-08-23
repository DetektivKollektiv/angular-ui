import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseDetailsComponent } from './case-details/case-details.component';

@NgModule({
  declarations: [CaseDetailsComponent],
  exports: [CaseDetailsComponent],
  imports: [
    CommonModule,
  ]
})
export class CaseDetailsModule { }
