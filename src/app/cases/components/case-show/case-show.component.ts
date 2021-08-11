import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/model/item';
import { ArchiveState } from '../../../archive/state/archive.state';
import { ArchiveService } from '../../../archive/services/archive.service';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-case-show',
  templateUrl: './case-show.component.html',
  styleUrls: ['./case-show.component.scss'],
})

export class CaseShowComponent implements OnInit {
  // @Select(ArchiveState.items) items$: Observable<Item[]>;
  // cases:any[];

  // constructor( private archiveService: ArchiveService  ) {

  // }

  ngOnInit(): void {
    // this.items$.subscribe((items) => {
    //   this.cases = items;
    // });
  }
}
