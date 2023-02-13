import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-community-section',
  templateUrl: './community-section.component.html',
  styleUrls: ['./community-section.component.scss']
})
export class CommunitySectionComponent implements OnInit {
  @Input() focused = false;
  @Input() hidden = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.focused) {
      this.focused = changes.focused.currentValue;
    } else {
      this.hidden = changes.hidden.currentValue;
    }
  }

  ngOnInit(): void {
  }


}
