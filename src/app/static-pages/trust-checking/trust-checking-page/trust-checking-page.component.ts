import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TrustCheckingCriterion } from 'src/app/model/trust-checking-criterion';
@Component({
  selector: 'app-trust-checking-page',
  templateUrl: './trust-checking-page.component.html',
  styleUrls: ['./trust-checking-page.component.scss']
})
export class TrustCheckingPageComponent implements OnInit {

  tcCriteria: TrustCheckingCriterion[] = [];

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.httpclient.get<TrustCheckingCriterion[]>('assets/data/criteria_text.json').subscribe(data => {
      this.tcCriteria = data;
    });
  }
}
