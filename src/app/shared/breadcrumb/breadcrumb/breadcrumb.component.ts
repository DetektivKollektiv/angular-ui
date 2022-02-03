import { Component, Input, OnInit } from '@angular/core';
import { BreadcrumbLink } from '../model/breadcrumb-link.interface';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit {
  @Input() links: BreadcrumbLink[];
  homelink: boolean;

  constructor() {}

  ngOnInit(): void {
    this.homelink = this.links[0].homelink ? true : false;
  }
}
