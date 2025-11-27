import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';
import { ArchiveState } from '../../state/archive.state';
import { GetDetailItem } from '../../state/archive.actions';
import { Item } from '../../model/item';

@Component({
  selector: 'app-archive-details-page',
  templateUrl: './archive-details-page.component.html',
  styleUrls: ['./archive-details-page.component.scss']
})
export class ArchiveDetailsPageComponent implements OnInit {
  @Select(ArchiveState.detailItem) detailItem$!: Observable<Item>;
  loading = true;

  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Gelöste Fälle', link: '/archive' }, {label: 'Detail'}];

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => params['id']),
        tap(() => (this.loading = true)),
        switchMap((id) => this.store.dispatch(new GetDetailItem(id))),
        tap(() => (this.loading = false))
      )
      .subscribe();
  }
}
