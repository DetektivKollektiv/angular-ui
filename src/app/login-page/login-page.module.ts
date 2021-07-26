import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../shared/auth/auth.module';
import { AuthenticationPageModule } from '../authentication-page/authentication-page.module';

import { MaterialModule } from '../shared/material/material.module';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        LoginFormComponent,
        LoginPageComponent
    ],
    exports: [
        LoginFormComponent,
        LoginPageComponent,
    ],
    imports: [
        AuthenticationPageModule,
        AuthModule,
        MaterialModule,
        RouterModule
    ],
})

export class LoginPageModule { }
