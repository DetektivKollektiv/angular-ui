import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDateRangePickerInput } from '@angular/material/datepicker/date-range-picker';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Filter } from '../../model/filter';
import {
  AddFilterKeyword,
  RemoveFilterId,
  RemoveFilterKeyword,
  SetEndDateFilter,
  SetMaxFilter,
  SetMinFilter,
  SetStartDateFilter,
} from '../../state/archive.actions';
import { ArchiveState } from '../../state/archive.state';

@Component({
  selector: 'app-archive-toolbar',
  templateUrl: './archive-toolbar.component.html',
  styleUrls: ['./archive-toolbar.component.scss'],
})
export class ArchiveToolbarComponent implements OnInit {
  @Select(ArchiveState.filter) filter$: Observable<Filter>;

  public filter: Filter;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.filter$.subscribe((filter) => (this.filter = filter));
  }

  public onMinSliderChanged(value: number): void {
    this.store.dispatch(new SetMinFilter(value));
  }

  public onMaxSliderChanged(value: number): void {
    this.store.dispatch(new SetMaxFilter(value));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.store.dispatch(new AddFilterKeyword(value));
    }

    if (input) {
      input.value = '';
    }
  }

  remove(keyword: string): void {
    this.store.dispatch(new RemoveFilterKeyword(keyword));
  }

  removeId(): void {
    this.store.dispatch(new RemoveFilterId());
  }

  onStartDateChanged(event: { value: Date }): void {
    if (event.value) {
      this.store.dispatch(new SetStartDateFilter(event.value));
    }
  }

  onEndDateChanged(event: { value: Date }): void {
    if (event.value) {
      this.store.dispatch(new SetEndDateFilter(event.value));
    }
  }
}
