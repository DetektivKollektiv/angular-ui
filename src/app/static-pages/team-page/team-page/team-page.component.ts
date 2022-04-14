import { Component } from '@angular/core';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';
import { NgxMasonryOptions } from 'ngx-masonry';
import { TagService } from './tag.service';
@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent {
  public masonryOption: NgxMasonryOptions = { gutter: '.gutter-sizer', horizontalOrder: true };
  breadcrumbLinks: BreadcrumbLink[] = [{label: 'Das Team'}];

  constructor(public tagService: TagService) {}
}
