import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/model/item';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.scss'],
})
export class ArchiveListComponent implements OnInit {
  @Input() archives: Item[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.archives)
  }

}
