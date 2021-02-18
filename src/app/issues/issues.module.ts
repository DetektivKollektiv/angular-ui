import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesComponent } from './components/issues/issues.component';
import { HelperModule } from '../shared/helper/helper.module';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [IssuesComponent],
  exports: [
    IssuesComponent
  ],
  imports: [
    CommonModule,
    HelperModule,
    MaterialModule
  ]
})
export class IssuesModule { }
