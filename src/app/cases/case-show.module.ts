import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../shared/auth/auth.module';
import { AuthenticationPageModule } from '../authentication-pages/components/authentication-page/authentication-page.module';

import { MaterialModule } from '../shared/material/material.module';

import { CaseShowComponent } from './components/case-show/case-show.component';

import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        CaseShowComponent,
    ],
    exports: [
        CaseShowComponent,
    ],
    imports: [
        AuthenticationPageModule,
        AuthModule,
        MaterialModule,
        RouterModule
    ],
})

export class CaseShowModule { }
