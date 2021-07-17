import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseListItemComponent } from './case-list-item/case-list-item.component';


@NgModule({
  declarations: [CaseListItemComponent],
  exports: [CaseListItemComponent],
  imports: [
    CommonModule
  ]
})
export class CaseListItemModule { }
