import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.scss']
})
export class IntroSectionComponent implements OnInit {

  withBreadcrumbs = (this.router.url === '/landingpage') ? true : false;

  breadcrumbLinks: BreadcrumbLink[] = [{label: 'Überblick'}];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
