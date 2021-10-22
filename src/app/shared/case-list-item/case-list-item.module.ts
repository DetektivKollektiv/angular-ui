import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseListItemComponent } from './case-list-item/case-list-item.component';
import { PipesModule } from '@shared/pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CaseListItemComponent],
  exports: [CaseListItemComponent],
  imports: [CommonModule, PipesModule, RouterModule]
})
export class CaseListItemModule {}
