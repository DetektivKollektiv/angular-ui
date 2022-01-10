import { Component, EventEmitter, Optional, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CaseFilter } from '../../model/case-filter';
import { ArchiveState } from '../../state/archive.state';

@Component({
  selector: 'app-archive-list-filter',
  templateUrl: './archive-list-filter.component.html',
  styleUrls: ['./archive-list-filter.component.scss']
})
export class ArchiveListFilterComponent {
  @Select(ArchiveState.filter) filter$!: Observable<CaseFilter>;

  @Output() apply = new EventEmitter<CaseFilter>();
  @Output() closed = new EventEmitter<void>();

  filterData$ = this.filter$.pipe(map((filter) => ({ ...filter, minValue: filter.minValue, maxValue: filter.maxValue})));

  constructor(@Optional() private dialogRef: MatDialogRef<ArchiveListFilterComponent>) {}

  onApply(filterData: CaseFilter) {
    this.apply.emit(filterData);
    this.closeDialog(filterData);
  }

  onClose() {
    this.closed.emit();
    this.closeDialog();
  }

  private closeDialog(filterData?: CaseFilter) {
    if (this.dialogRef) {
      this.dialogRef.close(filterData);
    }
  }
}
