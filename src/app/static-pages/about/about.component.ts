import { Component, OnInit } from '@angular/core';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  breadcrumbLinks: BreadcrumbLink[] = [{label: 'Der Verein'}];

  constructor() { }

  ngOnInit(): void {
  }

}
