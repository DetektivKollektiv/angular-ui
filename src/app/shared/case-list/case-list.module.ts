import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseListComponent } from './case-list/case-list.component';
import { CaseListItemModule } from '../case-list-item/case-list-item.module';

@NgModule({
  declarations: [CaseListComponent],
  exports: [CaseListComponent],
  imports: [
    CommonModule,
    CaseListItemModule
  ]
})
export class CaseListModule { }
