import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Item } from '../model/item';
import { CheckResult } from '../model/check-result';
import { Review } from '../model/review';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }
  private urlBase = 'https://qnjx6cvcge.execute-api.eu-central-1.amazonaws.com/Stage';

  private itemsUrl = `${this.urlBase}/items`;
  private reviewsUrl = `${this.urlBase}/Review`;

  private checkItemUrl = `${this.itemsUrl}/check`;
  private randomItemUrl = `${this.itemsUrl}/random`;

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError(
      'Something bad happened; please try again later.');
  }

  public getItem(): Observable<Item> {
    return this.httpClient.get<Item>(this.randomItemUrl);
  }

  public reviewItem(review: Review): Observable<Item> {
    return this.httpClient.post(this.reviewsUrl, review).pipe(
      catchError(err => ItemsService.handleError(err))
    );
  }

  public checkItem(text: string): Observable<CheckResult> {
    return this.httpClient.post(this.checkItemUrl, text, {observe: 'response'}).pipe(
      map(
        (resp: HttpResponse<Item>) => {
          if (resp.status === 200) {
            return { created: false, item: resp.body };
          } else if (resp.status === 201) {
            return { created: true, item: resp.body };
          }
        }
      ),
      catchError(err => ItemsService.handleError(err))
    );
  }
}
