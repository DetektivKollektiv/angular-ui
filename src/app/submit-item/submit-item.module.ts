import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubmitComponent} from './components/submit/submit.component';
import {MaterialModule} from '../shared/material/material.module';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';

@NgModule({
  declarations: [SubmitComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ]
})
export class SubmitItemModule {
}
