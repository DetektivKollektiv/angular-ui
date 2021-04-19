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

  // TODO: Get from Lambda
  public tagsCurrent: string[];

  // Initially contains all current tags
  public tagsUser: string[];

  constructor(
    private itemsService: ItemsService,
    private loader: LoaderService,
    private matSnackBar: MatSnackBar
  ) {}

  async ngOnInit(): Promise<void> {
    this.tagsCurrent = await this.itemsService.getItemTags(this.itemId);
    this.tagsUser = this.tagsCurrent;
  }

  add({ input, value }: MatChipInputEvent): void {

    // Add tag
    if ((value || '').trim()) {
      this.tagsUser.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
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
