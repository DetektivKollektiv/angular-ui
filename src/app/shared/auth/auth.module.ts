import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './auth-service/auth.service';
import {MaterialModule} from '../../material/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
