import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitComponent } from './components/submit/submit.component';
import { MaterialModule } from '../shared/material/material.module';
import { HelperModule } from '../shared/helper/helper.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SubmitComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    HelperModule,
    RouterModule,
    TranslateModule.forChild()
  ]
})
export class SubmitItemModule {
}
