import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFileComponent } from './components/my-file/my-file.component';
import { HelperModule } from '../shared/helper/helper.module';



@NgModule({
  declarations: [MyFileComponent],
  exports: [
    MyFileComponent
  ],
  imports: [
    CommonModule,
    HelperModule
  ]
})
export class MyFileModule { }
