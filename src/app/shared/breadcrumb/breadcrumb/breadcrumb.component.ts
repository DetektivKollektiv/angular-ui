import { Component, Input } from '@angular/core';
import { BreadcrumbLink } from '../model/breadcrumb-link.interface';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  @Input() links: BreadcrumbLink[];
}
