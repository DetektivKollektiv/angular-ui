import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-workshop-section',
  templateUrl: './workshop-section.component.html',
  styleUrls: ['./workshop-section.component.scss']
})
export class WorkshopSectionComponent implements OnInit {
  @Input() focused = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.focused = changes.focused.currentValue;

  }

  ngOnInit(): void {
  }

}
