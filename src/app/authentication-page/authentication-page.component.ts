import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { Item } from 'src/app/model/item';
import { ArchiveState } from '../archive/state/archive.state';
import { ArchiveService } from '../archive/services/archive.service';


@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.scss']
})

export class AuthenticationPageComponent implements OnInit {
  @Input('loginCTA') loginCta = 'register'; // tslint:disable-line: no-input-rename

  @Select(ArchiveState.items) items$: Observable<Item[]>;
  cases: any[];
  constructor( private archiveService: ArchiveService  ) {

  }

  ngOnInit(): void {
    this.items$.subscribe((items) => {
      this.cases = items;
    });
  }
}
