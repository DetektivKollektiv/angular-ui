import { Component, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../../core/model/user';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.scss']
})
export class CommentInputComponent {
  @Input() authenticated: boolean;
  @Input() user: User;
  @Input() instantChanges: boolean;

  @Output() commentSubmitted = new EventEmitter();

  comment = '';

  submitComment() {
    this.commentSubmitted.emit(this.comment);
    this.comment = '';
  }

  commentChanged() {
    if (this.instantChanges) {
      this.commentSubmitted.emit(this.comment);
    }
  }
}
