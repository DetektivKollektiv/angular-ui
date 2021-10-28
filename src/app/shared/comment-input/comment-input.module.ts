import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentInputComponent } from './comment-input/comment-input.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CommentInputComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [CommentInputComponent]
})
export class CommentInputModule {}
