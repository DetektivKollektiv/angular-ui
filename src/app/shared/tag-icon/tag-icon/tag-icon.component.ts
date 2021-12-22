import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-icon',
  templateUrl: './tag-icon.component.html',
  styleUrls: ['./tag-icon.component.scss']
})
export class TagIconComponent implements OnInit {
  @Input() tag: string;
  @Input() styleClass: string;
  @Input() iconClass = '';

  private specialTags = {
    hatespeech: 'far fa-frown',
    'kein impressum': 'fas fa-question',
    'keine quellen': 'fas fa-unlink'
  };

  constructor() {}

  ngOnInit(): void {
    const lowerCaseTag = this.tag?.toLowerCase();

    this.iconClass = this.specialTags[lowerCaseTag];

    if (lowerCaseTag in this.specialTags) {
      this.styleClass = 'empty';
    }
  }
}
