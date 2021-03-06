import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Filter } from '../../model/filter';

@Component({
  selector: 'app-archive-toolbar',
  templateUrl: './archive-toolbar.component.html',
  styleUrls: ['./archive-toolbar.component.scss'],
})
export class ArchiveToolbarComponent implements OnInit {
  @Output() public filterChanged = new EventEmitter<Filter>();

  public filter: Filter = { text: '', minValue: 1, maxValue: 4 };
  private searchUpdated: Subject<string> = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.searchUpdated
      .asObservable()
      .pipe(
        tap((value) => (this.filter.text = value)),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.filterChanged.emit(this.filter);
      });
  }

  public onSearchType(value: string): void {
    this.searchUpdated.next(value);
  }

  public onSliderChanged(): void {
    this.filterChanged.emit(this.filter);
  }

  public clearSearchTag(): void {
    this.searchUpdated.next('');
  }
}
