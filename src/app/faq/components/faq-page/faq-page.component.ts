import { Component, OnInit } from '@angular/core';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';


@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

  breadcrumbLinks: BreadcrumbLink[] = [{label: 'FAQ'}];

  constructor() {
  }

  ngOnInit(): void {
  }

}
