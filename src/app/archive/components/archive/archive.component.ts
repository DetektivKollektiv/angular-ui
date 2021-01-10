import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../../../shared/loader/service/loader.service';
import { ArchiveService } from '../../services/archive.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {
  // public itemsList: Item[] = [];
  public itemsList: any[] = [
    {
      id: '61852918-9d5f-473c-8d92-dfc6c2524272',
      content:
        'Spanien korrigiert Anzahl der  Corona-Toten von über 26.000 auf 2.000. Bin mal gespannt, wie lange D-A-CH noch an den FAKE-Zahlen festhalten wollen.',
      language: 'de',
      status: 'open',
      variance: null,
      result_score: 1.7,
      open_reviews: 4,
      open_timestamp: '2020-10-30 06:20:20',
      close_timestamp: '2020-10-30 06:20:20',
      tags: [
        'Coronavirus',
        'COVID-19',
        'Pandemie',
        'Spanien',
        'Infektionszahlen',
      ],
    },
    {
      id: '6609a52b-928e-4e71-a3c3-72f343bebd7a',
      content:
        'Stimmt das? https://viralvirus.de/politik/obama-finanzierte-labor-in-wuhan/?fbclid=IwAR3qOdSnC-A7h6wvPQcOFmuFPgLGNOImn_Ee6_vjAGeAmVJ9MVZnoNeFMBk',
      language: 'de',
      status: 'open',
      variance: null,
      result_score: 1.2,
      open_reviews: 4,
      open_timestamp: '2020-10-02 13:44:03',
      close_timestamp: '2020-10-30 06:20:20',
      tags: ['Obama', 'Wuhan', 'Coronavirus'],
    },
  ];

  constructor(
    private archiveService: ArchiveService,
    private router: Router,
    private snackBar: MatSnackBar,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    // this.loaderService.show();
    // this.archiveService.getClosedItems()
    //   .then(closedItems => {
    //     this.loaderService.hide();
    //     this.itemsList = closedItems;
    //   })
    //   .catch(_ => {
    //     this.loaderService.hide();
    //     this.snackBar.open('Archiv kann nicht angezeigt werden.', 'Ok', {
    //       duration: 2000
    //     });
    //   });
  }

  home(): void {
    this.router.navigate(['/']);
  }
}
