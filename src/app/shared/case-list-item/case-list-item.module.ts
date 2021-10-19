import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseListItemComponent } from './case-list-item/case-list-item.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [CaseListItemComponent],
  exports: [CaseListItemComponent],
  imports: [CommonModule, PipesModule]
})
export class CaseListItemModule {}
