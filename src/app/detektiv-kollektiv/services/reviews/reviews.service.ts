import { Injectable } from '@angular/core';
import {Review} from '../../model/review';
import {Observable} from 'rxjs';
import {Item} from '../../model/item';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {BaseService} from '../base/base.service';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService extends BaseService {
  private reviewsUrl = `${environment.apiBase}/reviews`;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public reviewItem(review: Review): Observable<Item> {
    return this.httpClient.post(this.reviewsUrl, review).pipe(
      catchError(err => this.handleError(err))
    );
  }
}
