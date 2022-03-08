import { Component, OnInit } from '@angular/core';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {

  breadcrumbLinks: BreadcrumbLink[] = [{label: 'Impressum'}];

  constructor() { }

  ngOnInit(): void {
  }

}
