import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caseId'
})
export class CaseIdPipe implements PipeTransform {
  transform(id: string): string {
    return '#' + (!!id ? id.split('-')[0] : 'unknown');
  }
}
