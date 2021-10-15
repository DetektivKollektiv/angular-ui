import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoaderService } from 'src/app/shared/loader/service/loader.service';
import { Review } from '../../model/review';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsService } from '../../services/items/items.service';

@Component({
  selector: 'app-tags-question',
  templateUrl: './tags-question.component.html',
  styleUrls: ['./tags-question.component.scss'],
})
export class TagsQuestionComponent implements OnInit {
  @Input() review: Review;
  @Input() itemId: string;

  chipInputKeyCodes = [ENTER, COMMA];

  // Initially contains no tags
  public tagsUser: string[];

  constructor(
    private itemsService: ItemsService,
    private loader: LoaderService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.tagsUser = new Array(0);
  }

  add({ input, value }: MatChipInputEvent): void {

    // Users maximum amount of tags to add is 3
    if (this.tagsUser.length < 3) {

      // Add tag
      if ((value || '').trim()) {
        this.tagsUser.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

    }

  }

  remove(tag: string): void {
    const index = this.tagsUser.indexOf(tag);

    if (index >= 0) {
      this.tagsUser.splice(index, 1);
    }
  }

  async submitTags() {
    await this.itemsService.setItemTags(this.itemId, this.tagsUser);
  }
}
