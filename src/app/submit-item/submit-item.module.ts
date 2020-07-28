import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubmitComponent} from './components/submit/submit.component';
import {MaterialModule} from '../shared/material/material.module';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';
import {HelperModule} from '../shared/helper/helper.module';

@NgModule({
  declarations: [SubmitComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HelperModule,
  ]
})
export class SubmitItemModule {
}
