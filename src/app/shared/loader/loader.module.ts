import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoaderService} from './service/loader.service';
import {LoaderComponent} from './component/loader.component';
import {MaterialModule} from '../material/material.module';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    LoaderService
  ],
  exports: [
    LoaderComponent
  ]
})
export class LoaderModule { }
