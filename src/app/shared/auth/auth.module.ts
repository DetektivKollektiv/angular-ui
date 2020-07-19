import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth-service/auth.service';
import {MaterialModule} from '../material/material.module';
import {AuthGuard} from './auth-guard/auth.guard';


@NgModule({
  declarations: [],
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
