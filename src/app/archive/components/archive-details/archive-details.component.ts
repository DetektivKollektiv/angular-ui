import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-archive-details',
  templateUrl: './archive-details.component.html',
  styleUrls: ['./archive-details.component.scss'],
})
export class ArchiveDetailsComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Item,
    public dialogRef: MatDialogRef<ArchiveDetailsComponent>
  ) {}

  ngOnInit(): void {}

  get shareLink() {
    return `${window.location.host}/archive/${this.data.id}`;
  }
}
