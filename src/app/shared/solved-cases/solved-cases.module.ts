import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolvedCasesComponent } from './solved-cases/solved-cases.component';
import { CaseListItemModule } from '@shared/case-list-item/case-list-item.module';
import { ButtonModule } from '@shared/button/button.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SolvedCasesComponent],
  imports: [CommonModule, CaseListItemModule, ButtonModule, RouterModule],
  exports: [SolvedCasesComponent]
})
export class SolvedCasesModule {}
