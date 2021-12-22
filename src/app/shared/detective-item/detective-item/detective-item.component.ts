import { Component, Directive, Input, OnInit } from '@angular/core';
import { Detective } from '../../../model/detective';

@Directive({
  selector: '[appDetectiveItemSuffix]'
})
export class DetectiveItemSuffixDirective {}

@Directive({
  selector: '[appDetectiveItemContent]'
})
export class DetectiveItemContentDirective {}

@Component({
  selector: 'app-detective-item',
  templateUrl: './detective-item.component.html',
  styleUrls: ['./detective-item.component.scss']
})
export class DetectiveItemComponent implements OnInit {
  @Input() detective: Detective;

  index: number;

  ngOnInit() {
    this.index = Math.ceil(Math.random() * 10);
  }
}
