import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-workshop-section',
  templateUrl: './workshop-section.component.html',
  styleUrls: ['./workshop-section.component.scss']
})
export class WorkshopSectionComponent implements OnInit {
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
