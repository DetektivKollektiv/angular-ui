import { Component, Input, OnInit } from '@angular/core';
import { Supporter } from '../supporter-section.component';

@Component({
  selector: 'app-supporter-item',
  templateUrl: './supporter-item.component.html',
  styleUrls: ['./supporter-item.component.scss']
})
export class SupporterItemComponent implements OnInit {
  @Input() supporter: Supporter;

  constructor() {}

  ngOnInit(): void {}
}
