import { Pipe, PipeTransform } from '@angular/core';
import { ItemSource } from '../../model/item-source.type';

@Pipe({
  name: 'itemSource',
})
export class ItemSourcePipe implements PipeTransform {
  transform(value: ItemSource): string {
    switch (value) {
      case 'messenger':
        return 'Per Messenger (z.B. Whatsapp, Telegram oder SMS)';
      case 'social_media':
        return 'Über soziale Medien (z.B. Facebook, Twitter, Instagram)';
      case 'web_surfing':
        return 'Beim Surfen im Internet';
      case 'other_media':
        return 'Über andere Medien (z.B. Fernsehen, Radio, Zeitung)';
      case 'orally':
        return 'Aus Gesprächen (z.B. mit Freunden oder Familienmitgliedern)';
      default:
        return 'Sonstiges';
    }
  }
}
