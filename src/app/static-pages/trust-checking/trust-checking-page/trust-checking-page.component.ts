import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TrustCheckingCriterion } from 'src/app/model/trust-checking-criterion';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';
@Component({
  selector: 'app-trust-checking-page',
  templateUrl: './trust-checking-page.component.html',
  styleUrls: ['./trust-checking-page.component.scss']
})
export class TrustCheckingPageComponent implements OnInit {

  tcCriteria: TrustCheckingCriterion[] = [];

  breadcrumbLinks: BreadcrumbLink[] = [{label: 'Trust-Checking'}];

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.httpclient.get<TrustCheckingCriterion[]>('assets/data/criteria_text.json').subscribe(data => {
      this.tcCriteria = data;
    });
  }
}
