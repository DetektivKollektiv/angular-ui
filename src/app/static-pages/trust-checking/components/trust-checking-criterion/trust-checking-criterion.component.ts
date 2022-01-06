import { Component, Input, OnInit } from '@angular/core';
import { TrustCheckingCriterion } from 'src/app/model/trust-checking-criterion';

@Component({
  selector: 'app-trust-checking-criterion',
  templateUrl: './trust-checking-criterion.component.html',
  styleUrls: ['./trust-checking-criterion.component.scss']
})
export class TrustCheckingCriterionComponent implements OnInit {
  @Input() criterion: TrustCheckingCriterion;
  extended = true;
  constructor() { }

  ngOnInit(): void {
  }
  extend_collapse(){
    this.extended = !this.extended;
  }
}
