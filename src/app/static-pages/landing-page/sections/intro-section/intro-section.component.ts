import { Component, OnInit } from '@angular/core';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.scss']
})
export class IntroSectionComponent implements OnInit {

  breadcrumbLinks: BreadcrumbLink[] = [{label: 'Überblick'}];

  constructor() { }

  ngOnInit(): void {
  }

}
