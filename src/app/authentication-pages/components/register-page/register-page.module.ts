import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../../../shared/auth/auth.module';
import { AuthenticationPageModule } from '../authentication-page/authentication-page.module';

import { MaterialModule } from '../../../shared/material/material.module';

import { RegisterPageComponent } from './components/register-page/register-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        RegisterFormComponent,
        RegisterPageComponent
    ],
    exports: [
        RegisterFormComponent,
        RegisterPageComponent,
    ],
    imports: [
        AuthenticationPageModule,
        AuthModule,
        MaterialModule,
        RouterModule
    ],
})

export class RegisterPageModule { }
