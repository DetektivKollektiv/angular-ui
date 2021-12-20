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
  @Input() tags: string[] = [];

  @Output() tagsChanged = new EventEmitter<string[]>();

  chipInputKeyCodes = [ENTER, COMMA];

  add({ input, value }: MatChipInputEvent): void {
    if (!this.tags) {
      this.tags = [];
    }
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.tagsChanged.emit(this.tags);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
    this.tagsChanged.emit(this.tags);
  }
}
