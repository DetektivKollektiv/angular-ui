import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leadingZeros'
})
export class LeadingZerosPipe implements PipeTransform {
  transform(value: number, length: number = 2): string {
    return String(value).padStart(length, '0');
  }
}
