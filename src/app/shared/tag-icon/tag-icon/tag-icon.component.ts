import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-icon',
  templateUrl: './tag-icon.component.html',
  styleUrls: ['./tag-icon.component.scss']
})
export class TagIconComponent implements OnInit {
  @Input() tag: any;
  @Input() styleClass;
  public iconClass = '';

  constructor() {}

  ngOnInit(): void {
    const lowerCaseTag = this.tag.toLowerCase();
    if (lowerCaseTag === 'kein impressum') {
      this.iconClass = 'fas fa-question';
    } else if (lowerCaseTag === 'hatespeech') {
      this.iconClass = 'far fa-frown';
    } else if (lowerCaseTag === 'keine quellen') {
      this.iconClass = 'fas fa-unlink';
    }

    const specialTags = ['hatespeech', 'kein impressum', 'keine quellen'];
    const specialEmptyStyleTag = specialTags.indexOf(lowerCaseTag) > -1;
    if (specialEmptyStyleTag) {
      this.styleClass = 'empty';
    }
  }
}
