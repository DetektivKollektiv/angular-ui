import { Component, Input, OnInit } from '@angular/core';
import { TrustCheckingCriterion } from 'src/app/model/trust-checking-criterion';

@Component({
  selector: 'app-trust-checking-criterion',
  templateUrl: './trust-checking-criterion.component.html',
  styleUrls: ['./trust-checking-criterion.component.scss']
})
export class TrustCheckingCriterionComponent implements OnInit {
  @Input() criterion: TrustCheckingCriterion;
  background_color: string;
  extended = true;
  constructor() { }

  ngOnInit(): void {
    this.background_color = this.criterion.text_color.replace('1)','0.1)');
    console.log(this.background_color);
  }
}
