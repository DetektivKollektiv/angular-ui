import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth-service/auth.service';
import {MaterialModule} from '../material/material.module';
import {AuthGuard} from './auth-guard/auth.guard';
import { SignupComponent } from './dialogs/signup/signup.component';
import { LoginComponent } from './dialogs/login/login.component';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { ForgotPasswordComponent } from './dialogs/forgot-password/forgot-password.component';
import { ForgotPasswordSubmitComponent } from './dialogs/forgot-password-submit/forgot-password-submit.component';


@NgModule({
  declarations: [SignupComponent, LoginComponent, ConfirmComponent, ForgotPasswordComponent, ForgotPasswordSubmitComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule {
}
