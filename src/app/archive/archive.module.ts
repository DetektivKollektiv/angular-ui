import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { HelperModule } from '../shared/helper/helper.module';
import { ArchiveComponent } from './components/archive/archive.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArchiveComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HelperModule,
    RouterModule,
  ]
})
export class ArchiveModule {
}
