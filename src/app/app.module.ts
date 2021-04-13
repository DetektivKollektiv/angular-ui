import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { AuthModule } from './shared/auth/auth.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoaderModule } from './shared/loader/loader.module';
import { SubmitItemModule } from './submit-item/submit-item.module';
import { CoreModule } from './core/core.module';
import { ReviewItemModule } from './review-item/review-item.module';
import { ArchiveModule } from './archive/archive.module';
import { UnsavedChangesModule } from './shared/unsaved-changes/unsaved-changes.module';
import { ProfileModule } from './profile/profile.module';
import { HighscoresModule } from './highscores/highscores.module';
import { MyFileModule } from './my-file/my-file.module';
import { IssuesModule } from './issues/issues.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from 'src/environments/environment';

import 'hammerjs';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    LoaderModule,
    CoreModule,
    AuthModule,
    UnsavedChangesModule,
    SubmitItemModule,
    ReviewItemModule,
    MyFileModule,
    IssuesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ProfileModule,
    HighscoresModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
    ArchiveModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
