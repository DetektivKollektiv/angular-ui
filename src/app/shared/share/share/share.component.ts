import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShareItem } from '../model/share-item';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent {
  marketingWording = 'Ich habe gerade einen Fall bei codetekt eingereicht. Tritt auch du der Community gegen Falschinformationen bei!';

  shareItems: ShareItem[] = [
    { type: 'link', url: 'https://codetekt.org/', faIcon: 'far fa-link' },
    {
      type: 'mail',
      url:
        'mailto:?&subject=&body=Ich%20habe%20gerade%20einen%20Fall%20bei%20codetekt%20eingereicht.%20Tritt%20auch%20du%20der' +
        '%20Community%20gegen%20Falschinformationen%20bei!%0Ahttps://codetekt.org/',
      faIcon: 'fas fa-envelope'
    },
    {
      type: 'twitter',
      url:
        'https://twitter.com/intent/tweet?url=https://codetekt.org/&text=Ich%20habe%20gerade%20einen%20Fall' +
        '%20bei%20codetekt%20eingereicht.%20Tritt%20auch%20du%20der%20Community%20gegen%20Falschinformationen%20bei!',
      faIcon: 'fab fa-twitter'
    },
    { type: 'facebook', url: 'https://www.facebook.com/sharer/sharer.php?u=https://codetekt.org/', faIcon: 'fab fa-facebook-f' },
    { type: 'instagram', url: 'https://www.instagram.com/codetekt/', faIcon: 'fab fa-instagram' }
  ];

  constructor(private snackBar: MatSnackBar) {}

  copy() {
    navigator.clipboard.writeText(this.marketingWording);
    this.snackBar.open('Der Text wurde in die Zwischenablage kopiert!', '', { duration: 3000 });
  }
}
