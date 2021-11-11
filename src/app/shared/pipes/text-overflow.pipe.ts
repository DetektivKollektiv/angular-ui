import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textOverflow'
})
export class TextOverflowPipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    return value?.length > maxLength && maxLength > 0 ? `${value.substr(0, maxLength)}...` : value;
  }
}
