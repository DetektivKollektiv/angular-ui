import { NgModule } from '@angular/core';
import { CheckItemComponent } from './components/check-item/check-item.component';
import { ReviewItemComponent } from './components/review-item/review-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { ReviewResultDialogComponent } from './components/dialogs/review-result-dialog/review-result-dialog.component';
import { CheckResultCreatedDialogComponent } from './components/dialogs/check-result-dialog/check-result-dialog.component';
import { CheckResultFoundDialogComponent } from './components/dialogs/check-result-found-dialog/check-result-found-dialog.component';

@NgModule({
  declarations: [
    CheckItemComponent,
    ReviewItemComponent,
    DashboardComponent,
    ReviewResultDialogComponent,
    CheckResultCreatedDialogComponent,
    CheckResultFoundDialogComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class DetektivKollektivModule { }
