import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../shared/auth/auth.module';
import { AuthenticationPageModule } from '../authentication-pages/components/authentication-page/authentication-page.module';
import { MaterialModule } from '../shared/material/material.module';
import { ForgotPasswordPageComponent } from './components/forgot-password-page/forgot-password-page.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { CaseListModule } from '../shared/case-list/case-list.module';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [ForgotPasswordPageComponent, ForgotPasswordFormComponent],
    exports: [
        ForgotPasswordPageComponent,
        ForgotPasswordFormComponent,
    ],
    imports: [
        AuthModule,
        AuthenticationPageModule,
        CaseListModule,
        MaterialModule,
        RouterModule
    ],
})
export class ForgotPasswordPageModule { }
