import { Component, OnInit } from '@angular/core';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';

@Component({
  selector: 'app-community-guidelines',
  templateUrl: './community-guidelines.component.html',
  styleUrls: ['./community-guidelines.component.scss']
})
export class CommunityGuidelinesComponent implements OnInit {

  breadcrumbLinks: BreadcrumbLink[] = [{label: 'Nutzungsbedingungen'}];

  constructor() { }

  ngOnInit(): void {
  }

}
