import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseFactsComponent } from './case-facts/case-facts.component';



@NgModule({
  declarations: [CaseFactsComponent],
  imports: [
    CommonModule
  ],
  exports: [CaseFactsComponent]
})
export class CaseFactsModule { }
