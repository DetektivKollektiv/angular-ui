import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-icon',
  templateUrl: './tag-icon.component.html',
  styleUrls: ['./tag-icon.component.scss']
})
export class TagIconComponent {
  @Input() tag: string;
  @Input() styleClass: string;
  @Input() iconClass = '';
}
