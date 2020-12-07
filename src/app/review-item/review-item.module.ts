import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReviewComponent} from './components/review/review.component';
import {HelperModule} from '../shared/helper/helper.module';
import {QuestionComponent} from './components/question/question.component';
import {MaterialModule} from '../shared/material/material.module';
import {LoaderModule} from '../shared/loader/loader.module';
import {FormsModule} from '@angular/forms';
import {UnsavedChangesModule} from '../shared/unsaved-changes/unsaved-changes.module';


@NgModule({
  declarations: [ReviewComponent, QuestionComponent],
  exports: [ReviewComponent],
  imports: [
    CommonModule,
    HelperModule,
    MaterialModule,
    LoaderModule,
    UnsavedChangesModule,
    FormsModule
  ]
})
export class ReviewItemModule {
}
