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
  @Input() comment = '';

  @Output() commentSubmitted = new EventEmitter();

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
