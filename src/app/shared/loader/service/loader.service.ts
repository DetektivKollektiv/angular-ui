import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public isLoading = new Subject<boolean>();

  constructor() {}

  public show() {
    this.isLoading.next(true);
  }
  public hide() {
    this.isLoading.next(false);
  }
}
