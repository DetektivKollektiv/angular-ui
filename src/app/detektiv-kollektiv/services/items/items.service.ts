import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Item} from '../../model/item';
import {CheckResult} from '../../model/check-result';
import {environment} from '../../../../environments/environment';
import {BaseService} from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService extends BaseService {

  private itemsUrl = `${environment.apiBase}/items`;
  private checkItemUrl = `${this.itemsUrl}/check`;
  private randomItemUrl = `${this.itemsUrl}/random`;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getItem(): Observable<Item> {
    return this.httpClient.get<Item>(this.randomItemUrl);
  }

  public checkItem(text: string): Observable<CheckResult> {
    return this.httpClient.post(this.checkItemUrl, text, {observe: 'response'}).pipe(
      map(
        (resp: HttpResponse<Item>) => {
          if (resp.status === 200) {
            return {created: false, item: resp.body};
          } else if (resp.status === 201) {
            return {created: true, item: resp.body};
          }
        }
      ),
      catchError(err => this.handleError(err))
    );
  }
}
