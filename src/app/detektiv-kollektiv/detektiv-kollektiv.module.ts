import {NgModule} from '@angular/core';
import {CheckItemComponent} from './components/check-item/check-item.component';
import {ReviewItemComponent} from './components/review-item/review-item.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MaterialModule} from '../material/material.module';
import {ReviewResultDialogComponent} from './components/dialogs/review-result-dialog/review-result-dialog.component';
import {CheckResultCreatedDialogComponent} from './components/dialogs/check-result-dialog/check-result-created-dialog.component';
import {CheckResultFoundDialogComponent} from './components/dialogs/check-result-found-dialog/check-result-found-dialog.component';
import {AuthModule} from '../shared/auth/auth.module';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {ListItemsComponent} from './components/list-items/list-items.component';
import {LoaderModule} from '../shared/loader/loader.module';

@NgModule({
  declarations: [
    CheckItemComponent,
    ListItemsComponent,
    ReviewItemComponent,
    DashboardComponent,
    ReviewResultDialogComponent,
    CheckResultCreatedDialogComponent,
    CheckResultFoundDialogComponent
  ],
  imports: [
    MaterialModule,
    AuthModule,
    LoaderModule,
    TranslateModule,
    CommonModule
  ]
})
export class DetektivKollektivModule {
}
