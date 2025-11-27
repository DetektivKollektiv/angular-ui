import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ItemPreviewData {
  title: string;
  url: string;
  host: string;
  isTrusted: boolean;
  trustLabel: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemPreviewComponent {
  item: ItemPreviewData = {
    title: 'Ukraine-Krieg: Russische Soldaten besetzen weitere Städte',
    url: 'https://www.fr.de/nachrichten/ukraine-krieg-russische-soldaten-besetzen-staedte',
    host: 'FR.DE',
    isTrusted: true,
    trustLabel: 'Vertrauenswürdig',
    imageUrl:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60'
  };

  openLink(): void {
    if (!this.item?.url) {
      return;
    }

    window.open(this.item.url, '_blank', 'noopener');
  }
}
