import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from 'src/app/shared/loader/service/loader.service';
import { Review } from '../../model/review';
import { QuestionsService } from '../../services/questions/questions.service';
import { ReviewAnswersService } from '../../services/review-answers/review-answers.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ItemsService } from '../../services/items/items.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tags-question',
  templateUrl: './tags-question.component.html',
  styleUrls: ['./tags-question.component.scss'],
})
export class TagsQuestionComponent implements OnInit {
  @Input() review: Review;
  @Input() itemId: string;
  @Output() finished = new EventEmitter();

  chipInputKeyCodes = [ENTER, COMMA];

  // TODO: Get from Lambda
  public tagsCurrent: string[];

  // Initially contains all current tags
  public tagsUser: string[];

  constructor(
    private questionsService: QuestionsService,
    private reviewAnswersService: ReviewAnswersService,
    private itemsService: ItemsService,
    private loader: LoaderService,
    private matSnackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit(): Promise<void> {
    this.tagsCurrent = await this.itemsService.getItemTags(this.itemId);
    this.tagsUser = this.tagsCurrent;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

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

  submitTags() {
    this.loader.show();
    this.itemsService.setItemTags(this.itemId, this.tagsUser);
    this.loader.hide();
    this.finished.emit();
  }
}
