import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@shared/auth/auth.module';
import { MaterialModule } from '@shared/material/material.module';
import { CaseListModule } from '@shared/case-list/case-list.module';
import { AuthenticationPageComponent } from './authentication-page.component';
import { StaticPagesModule } from 'src/app/static-pages/static-pages.module';
@NgModule({
    declarations: [AuthenticationPageComponent],
    exports: [
        AuthenticationPageComponent,
    ],
    imports: [
        MaterialModule,
        CaseListModule,
        AuthModule,
        RouterModule,
        StaticPagesModule
	],
})

export class AuthenticationPageModule { }
