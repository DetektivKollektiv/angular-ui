import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

export interface Supporter {
  image: string;
}

@Component({
  selector: 'app-supporter-section',
  templateUrl: './supporter-section.component.html',
  styleUrls: ['./supporter-section.component.scss']
})
export class SupporterSectionComponent implements OnInit, OnDestroy {
  private destroy$: Subject<any> = new Subject<any>();
  @Input() withHeadline = true;
  @Input() wide = true;
  supporters: Supporter[];
  constructor(private httpClient: HttpClient) {}

  @HostListener('unloaded')
  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.httpClient.get<Supporter[]>('assets/data/supporter.json').pipe(takeUntil(this.destroy$)).subscribe((supporters) => (this.supporters = supporters));
  }
}
