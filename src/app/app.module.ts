import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './shared/material/material.module';
import {AuthModule} from './shared/auth/auth.module';
import {LoginPageModule} from './authentication-pages/components/login-page/login-page.module';
import {HomeModule} from './home/home.module';
import {AuthenticationPageModule} from './authentication-pages/components/authentication-page/authentication-page.module';
import {ForgotPasswordPageModule} from './forgot-password-page/forgot-password-page.module';
import {RegisterPageModule} from './authentication-pages/components/register-page/register-page.module';
import {ConfirmEmailPageModule} from './confirm-email-page/confirm-email-page.module';
import {SetPasswordPageModule} from './authentication-pages/components/set-password-page/set-password-page.module';
import {BreadcrumbModule} from './shared/breadcrumb/breadcrumb.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LoaderModule} from './shared/loader/loader.module';
import {SubmitItemModule} from './submit-item/submit-item.module';
import {CoreModule} from './core/core.module';
import {ReviewItemModule} from './review-item/review-item.module';
import {ArchiveModule} from './archive/archive.module';
import {UnsavedChangesModule} from './shared/unsaved-changes/unsaved-changes.module';
import {ProfileModule} from './profile/profile.module';
import {HighscoresModule} from './highscores/highscores.module';
import {MyFileModule} from './my-file/my-file.module';
import {MyProfileModule} from './my-profile/my-profile.module';
import {IssuesModule} from './issues/issues.module';
import {NgxsModule} from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {environment} from 'src/environments/environment';

import 'hammerjs';
import {FaqModule} from './faq/faq.module';
import { HelperModule } from './shared/helper/helper.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { AuthenticationPageComponent } from './authentication-pages/components/authentication-page/authentication-page.component';
import { AboutComponent } from './about/about.component';
import { OpenCaseListSliderModule } from './shared/open-case-list-slider/open-case-list-slider.module';
import { UserExperienceBubbleListModule } from './shared/user-experience-bubble-list/user-experience-bubble-list.module';
import { FaqModule } from './faq/faq.module';
import { StaticPagesModule } from './static-pages/static-pages.module';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, FooterOnlyLayoutComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    LoaderModule,
    CoreModule,
    AuthModule,
    LoginPageModule,
    AuthenticationPageModule,
    UnsavedChangesModule,
    SubmitItemModule,
    ReviewItemModule,
    MyFileModule,
    IssuesModule,
    FaqModule,
    BreadcrumbModule,
    UserExperienceBubbleListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ProfileModule,
    HighscoresModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
    ArchiveModule,
    HelperModule,
    OpenCaseListSliderModule,
    HomeModule,
    MyProfileModule,
    StaticPagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
