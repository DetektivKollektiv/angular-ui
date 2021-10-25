import { Pipe, PipeTransform } from '@angular/core';
import { CaseSortBy } from '../model/case-sort';

@Pipe({
  name: 'caseSortBy'
})
export class CaseSortByPipe implements PipeTransform {
  transform(by: CaseSortBy | string): unknown {
    switch (by) {
      case CaseSortBy.OPEN_TIMESTAMP:
        return 'Datum';
      case CaseSortBy.RESULT_SCORE:
        return 'Vertrauensindex';
      default:
        return by;
    }
  }
}
