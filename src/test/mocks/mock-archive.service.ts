import { Observable, of } from 'rxjs';
import { Item } from 'src/app/model/item';

export class MockArchiveService {
  public getClosedItems(): Observable<Item[]> {
    return of([]);
  }
}
