import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extendedDate'
})
export class ExtendedDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: string, ...args: any[]): string {
    if (value === undefined) {
      return null;
    }

    return this.datePipe.transform(value.replace(/\s/g, 'T'), 'dd.MM.yyyy');
  }
}
