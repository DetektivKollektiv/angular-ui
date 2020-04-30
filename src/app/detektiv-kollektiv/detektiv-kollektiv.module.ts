import {NgModule} from '@angular/core';
import {CheckItemComponent} from './components/check-item/check-item.component';
import {ReviewItemComponent} from './components/review-item/review-item.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MaterialModule} from '../material/material.module';
import {ReviewResultDialogComponent} from './components/dialogs/review-result-dialog/review-result-dialog.component';
import {CheckResultCreatedDialogComponent} from './components/dialogs/check-result-dialog/check-result-created-dialog.component';
import {CheckResultFoundDialogComponent} from './components/dialogs/check-result-found-dialog/check-result-found-dialog.component';
import {LoginComponent} from './components/dialogs/login/login.component';
import {AuthModule} from '../shared/auth/auth.module';
import { NotLoggedInDialogComponent } from './components/dialogs/not-logged-in-dialog/not-logged-in-dialog.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    CheckItemComponent,
    ReviewItemComponent,
    DashboardComponent,
    ReviewResultDialogComponent,
    CheckResultCreatedDialogComponent,
    CheckResultFoundDialogComponent,
    LoginComponent,
    NotLoggedInDialogComponent
  ],
  imports: [
    MaterialModule,
    AuthModule,
    FlexLayoutModule,
    MatTabsModule
  ]
})
export class DetektivKollektivModule {
}
