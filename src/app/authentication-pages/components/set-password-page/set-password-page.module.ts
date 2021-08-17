import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../../../shared/auth/auth.module';
import { AuthenticationPageModule } from '../authentication-page/authentication-page.module';

import { MaterialModule } from '../../../shared/material/material.module';

import { SetPasswordPageComponent } from './components/set-password-page/set-password-page.component';
import { SetPasswordFormComponent } from './components/set-password-form/set-password-form.component';

import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        SetPasswordFormComponent,
        SetPasswordPageComponent
    ],
    exports: [
        SetPasswordFormComponent,
        SetPasswordPageComponent,
    ],
    imports: [
        AuthenticationPageModule,
        AuthModule,
        MaterialModule,
        RouterModule
    ],
})

export class SetPasswordPageModule { }
