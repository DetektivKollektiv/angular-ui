import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caseId'
})
export class CaseIdPipe implements PipeTransform {
  /**
   * Transforms a given GUID into a shorter version starting with a #-sign
   *
   * @param id The id in form of a GUID to convert.
   * @returns The first section of the GUID prepended with a #-sign (e.g. #1b3h56c8) or unknown if id is null.
   */
  transform(id: string): string {
    return '#' + (!!id ? id.split('-')[0] : 'unknown');
  }
}
