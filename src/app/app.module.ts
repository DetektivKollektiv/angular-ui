import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { DetektivKollektivModule } from './detektiv-kollektiv/detektiv-kollektiv.module';
import { LoaderComponent } from './shared/loader/component/loader.component';
import {LoaderService} from './shared/loader/service/loader.service';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [LoaderService],
  exports: [
    LoaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
