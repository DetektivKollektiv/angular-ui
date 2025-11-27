import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';
import { Observable } from 'rxjs';
import { Item } from '../../model/item';
import { ArchiveState } from '../../state/archive.state';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
  @Select(ArchiveState.items) items$: Observable<Item[]>;

  public archiveQuestions: any[] = [
    {
      title: 'Wann sehe ich etwas im Archiv?',
      description:
        'Jeder abgeschlossene - von den Detektiv*innen im Peer Review final bearbeitete - Fall ' +
        'wird ins Archiv gestellt und ist hier zu sehen.',
      background: 'color__neon-blue',
      icon: 'fal fa-eye'
    },
    {
      title: 'Wieviele Detektiv*innen lösen einen Fall?',
      description:
        'Um den Fall abzuschließen, müssen sich 8 Detektiv*innen beteiligen, ' +
        'jede*r erstellt unabhängig voneinander eine eigene Bewertung.',
      background: 'color__bittersweet',
      icon: 'fal fa-user-cowboy'
    },
    {
      title: 'Was ist ein Peer Review?',
      description:
        'Im codetekt Peer Review werden 4 Paare gebildet, dazu gehört jeweils ein*e Detektiv*in ' + 'mit mehr bzw. weniger Erfahrung.',
      background: 'color__green',
      icon: 'fal fa-user-crown'
    },
    {
      title: 'Wie errechnet sich der Score?',
      description: 'Der Gesamtscore ist der Durchschnitt aller Einzelbewertungen im Peer Review Verfahren. ',
      background: 'color__gold',
      icon: 'fal fa-chart-bar'
    },
    {
      title: 'Wie entsteht die Einzelbewertung?',
      description:
        'Die Einzelbewertung ergibt sich aus dem Durchschnitt aller Punkte, die ein*e Detektiv*in ' +
        'bei der Beantwortung der Fragen zu einem Fall erzielt. ',
      background: 'color__neon-blue',
      icon: 'fal fa-chart-bar'
    }
  ];

  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Gelöste Fälle' }];

  constructor() {}
}
