import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LoaderComponent } from './shared/loader/component/loader.component';
import {LoaderService} from './shared/loader/service/loader.service';
import {DetektivKollektivModule} from './detektiv-kollektiv/detektiv-kollektiv.module';
import {AuthModule} from './shared/auth/auth.module';
import {AuthGuard} from './shared/auth/auth-guard/auth.guard';
import { ListItemsComponent } from './detektiv-kollektiv/components/list-items/list-items.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ListItemsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    DetektivKollektivModule,
    AuthModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    LoaderService,
    AuthGuard
  ],
  exports: [
    LoaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
