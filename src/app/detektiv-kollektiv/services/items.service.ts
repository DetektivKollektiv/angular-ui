import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, takeWhile } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Item } from '../model/item';
import { CheckResult } from '../model/check-result';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  private checkItemUrl = "";
  private reviewItemUrl = "";
  private getItemUrl = "https://2vp995st3g.execute-api.eu-central-1.amazonaws.com/Prod";

  constructor(private httpClient: HttpClient) { }

  public getItem(): Observable<Item> {
    return this.httpClient.get<Item>(this.getItemUrl);
  }

  public reviewItem(review: boolean): Observable<Item> {
    return this.httpClient.put(this.reviewItemUrl, review).pipe(
      catchError(err => this.handleError(err))
    );
  }

  public checkItem(item: Item): Observable<CheckResult> {
    return this.httpClient.post(this.checkItemUrl, item).pipe(
      catchError(err => this.handleError(err))
    );
  }  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
