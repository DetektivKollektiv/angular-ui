import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss']
})
export class AboutUsSectionComponent implements OnInit {
  @Input() focused = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.focused = changes.focused.currentValue;

  }

  ngOnInit(): void {
  }


}
