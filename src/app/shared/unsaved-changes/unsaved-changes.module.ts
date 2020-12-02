import {NgModule} from '@angular/core';
import {UnsavedChangesGuard} from './guard/unsaved-changes.guard';
import { UnsavedChangesComponent } from './component/unsaved-changes/unsaved-changes.component';

@NgModule({
  declarations: [
  UnsavedChangesComponent],
  imports: [
  ],
  providers: [
    UnsavedChangesGuard
  ],
  exports: [
  ]
})
export class UnsavedChangesModule { }
