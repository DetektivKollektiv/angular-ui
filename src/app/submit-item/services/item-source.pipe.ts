import { Pipe, PipeTransform } from '@angular/core';
import { ItemSource, ItemSources } from '../../model/item-source';

@Pipe({
  name: 'itemSource'
})
export class ItemSourcePipe implements PipeTransform {
  transform(value: ItemSource): string {
    switch (value) {
      case ItemSources.Messenger:
        return 'Per Messenger (z.B. Whatsapp, Telegram oder SMS)';
      case ItemSources.SocialMedia:
        return 'Über soziale Medien (z.B. Facebook, Twitter, Instagram)';
      case ItemSources.WebSurfing:
        return 'Beim Surfen im Internet';
      case ItemSources.OtherMedia:
        return 'Über andere Medien (z.B. Fernsehen, Radio, Zeitung)';
      case ItemSources.Orally:
        return 'Aus Gesprächen (z.B. mit Freunden oder Familienmitgliedern)';
      default:
        return 'Sonstiges';
    }
  }
}
