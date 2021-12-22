import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textOverflow'
})
export class TextOverflowPipe implements PipeTransform {
  /**
   * Truncates a given text up to a specific maximum length, adding '...' at the end.
   *
   * @param value The string to truncate.
   * @param maxLength The maximum number of characters to display (excluding the added dots).
   * @returns The truncated string, including three added dots
   * or the initial value if length is less than maxLength or if maxLength is null,
   */
  transform(value: string, maxLength: number): string {
    return value?.length > maxLength && maxLength > 0 ? `${value.substr(0, maxLength)}...` : value;
  }
}
