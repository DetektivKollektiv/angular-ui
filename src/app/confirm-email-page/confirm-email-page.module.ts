import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../shared/auth/auth.module';
import { AuthenticationPageModule } from '../authentication-pages/components/authentication-page/authentication-page.module';

import { MaterialModule } from '../shared/material/material.module';

import { ConfirmEmailPageComponent } from './components/confirm-email-page/confirm-email-page.component';
import { ConfirmEmailFormComponent } from './components/confirm-email-form/confirm-email-form.component';

import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ConfirmEmailFormComponent,
        ConfirmEmailPageComponent
    ],
    exports: [
        ConfirmEmailFormComponent,
        ConfirmEmailPageComponent,
    ],
    imports: [
        AuthenticationPageModule,
        AuthModule,
        MaterialModule,
        RouterModule
    ],
})

export class ConfirmEmailPageModule { }
