import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemType',
})
export class ItemTypePipe implements PipeTransform {
  transform(id: string): string {
    switch (id) {
      case '1':
        return 'Link zu einem Artikel';
      case '2':
      default:
        return 'Textnachricht / Aussage';
    }
  }
}
