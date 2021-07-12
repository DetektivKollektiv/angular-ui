import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../shared/auth/auth.module';
import {MaterialModule} from '../shared/material/material.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';



@NgModule({
    declarations: [LoginPageComponent, LoginFormComponent],
    exports: [
        LoginPageComponent,
        LoginFormComponent
    ],
    imports: [
        MaterialModule,
        // CommonModule,
        AuthModule
    ],
})
export class LoginPageModule { }
