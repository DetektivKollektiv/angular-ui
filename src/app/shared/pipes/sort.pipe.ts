import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any[], field?: string, order: 'asc' | 'desc' = 'asc'): any[] {
    if (!Array.isArray(value)) {
      return value;
    }
    return [...value].sort((a, b) => {
      const valueA = field ? a[field] : a;
      const valueB = field ? b[field] : b;

      if (order === 'asc' ? valueA > valueB : valueB > valueA) {
        return 1;
      }
      if (order === 'asc' ? valueA < valueB : valueB < valueA) {
        return -1;
      }
      return 0;
    });
  }
}
