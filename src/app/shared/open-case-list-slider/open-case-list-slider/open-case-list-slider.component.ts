import { Component, OnInit, Input } from '@angular/core';
import { input } from 'aws-amplify';

@Component({
  selector: 'app-open-case-list-slider',
  templateUrl: './open-case-list-slider.component.html',
  styleUrls: ['./open-case-list-slider.component.scss'],
})
export class OpenCaseListSliderComponent implements OnInit {
  @Input() cases: any[];

  constructor() { }

  ngOnInit(): void { }

}
