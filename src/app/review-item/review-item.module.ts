import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './components/review/review.component';
import { HelperModule } from '../shared/helper/helper.module';
import { QuestionComponent } from './components/question/question.component';
import { MaterialModule } from '../shared/material/material.module';
import { LoaderModule } from '../shared/loader/loader.module';
import { FormsModule } from '@angular/forms';
import { UnsavedChangesModule } from '../shared/unsaved-changes/unsaved-changes.module';
import { MatChipsModule } from '@angular/material/chips';
import { TagsQuestionComponent } from './components/tags-question/tags-question.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ReviewComponent, QuestionComponent, TagsQuestionComponent],
  exports: [ReviewComponent],
  imports: [
    CommonModule,
    HelperModule,
    MaterialModule,
    LoaderModule,
    UnsavedChangesModule,
    FormsModule,
    MatChipsModule,
    MatInputModule,
  ],
})
export class ReviewItemModule {}
