import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoComponent} from './components/info/info.component';
import {CommunityGuidelinesComponent} from './components/community-guidelines/community-guidelines.component';
import {MemberInfoComponent} from './components/info/member-info/member-info.component';
import {DataPrivacyComponent} from './components/data-privacy/data-privacy.component';
import {ImprintComponent} from './components/imprint/imprint.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AuthModule} from '../shared/auth/auth.module';
import {LoaderModule} from '../shared/loader/loader.module';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../shared/material/material.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    InfoComponent,
    CommunityGuidelinesComponent,
    ImprintComponent,
    DataPrivacyComponent,
    MemberInfoComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    LoaderModule,
    RouterModule,
    MaterialModule
  ]
})
export class FrameModule { }
