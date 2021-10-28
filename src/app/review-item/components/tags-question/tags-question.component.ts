import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Review } from '../../model/review';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-tags-question',
  templateUrl: './tags-question.component.html',
  styleUrls: ['./tags-question.component.scss']
})
export class TagsQuestionComponent {
  @Input() review: Review;
  @Input() itemId: string;

  @Output() tagsChanged = new EventEmitter<string[]>();

  chipInputKeyCodes = [ENTER, COMMA];

  tagsUser: string[] = [];

  add({ input, value }: MatChipInputEvent): void {
    if ((value || '').trim()) {
      this.tagsUser.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.tagsChanged.emit(this.tagsUser);
  }

  remove(tag: string): void {
    const index = this.tagsUser.indexOf(tag);

    if (index >= 0) {
      this.tagsUser.splice(index, 1);
    }
    this.tagsChanged.emit(this.tagsUser);
  }
}
