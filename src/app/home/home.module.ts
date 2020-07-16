import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../shared/material/material.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class HomeModule { }
