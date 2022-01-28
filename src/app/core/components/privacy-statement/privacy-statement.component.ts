import { Component, OnInit } from '@angular/core';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';

@Component({
  selector: 'app-privacy-statement',
  templateUrl: './privacy-statement.component.html',
  styleUrls: ['./privacy-statement.component.scss']
})
export class PrivacyStatementComponent implements OnInit {

  breadcrumbLinks: BreadcrumbLink[] = [{label: 'Datenschutzerklärung'}];

  constructor() { }

  ngOnInit(): void {
  }

}
