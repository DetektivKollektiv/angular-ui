import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-community-section',
  templateUrl: './community-section.component.html',
  styleUrls: ['./community-section.component.scss']
})
export class CommunitySectionComponent implements OnInit {
  @Input() focused = false;

  constructor() {
  }


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.focused = changes.focused.currentValue;

  }

}
