import { Injectable } from '@angular/core';
import {Question} from '../../model/question';
import {API} from 'aws-amplify';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private questionsUrl = '/review_questions';

  constructor() { }

  public getQuestions(): Promise<Question[]> {
    // return of([
    //   {
    //     id: '1',
    //     content: 'Im Artikel/der Nachricht werden für alle Behauptungen/Thesen Originalquellen genannt.',
    //     mandatory: true
    //   },
    //   {
    //     id: '10',
    //     content: 'Zitierte Personen im Artikel/in der Nachricht haben tatsächlich im vom Artikel/der Nachricht aufgegriffenen Thema Expertise und werden berechtigterweise als Quelle genutuzt.',
    //     mandatory: true
    //   },
    //   {
    //     id: '11',
    //     content: 'Die im Artikel/in der Nachricht verwendeten Zitate stimmen mit ihrem ursprünglichen Kontext überein und wurden nicht zweckentfremdet.',
    //     mandatory: true
    //   },
    //   {
    //     id: '12',
    //     content: 'Das Medium scheint finanziell, politisch und thematisch unabhängig zu sein.',
    //     mandatory: true
    //   },
    //   {
    //     id: '13',
    //     content: 'Der/die Verfasser*in des Artikels oder eines über z.B. Whatsapp geteilten Inhaltes sind qualifizierte Expert*innen wie z.B. berufliche Journalist*innen und/oder Wissenschaftler*innen.\n',
    //     mandatory: true
    //   },
    //   {
    //     id: '2',
    //     content: 'Der Inhalt des Artikels/der Nachricht deckt sich vollständig mit dem der Originalquelle/n.',
    //     mandatory: true
    //   },
    //   {
    //     id: '3',
    //     content: 'Recherchiere die Originalquelle. Der Inhalt des Artikels/der Nachricht deckt sich vollständig mit dem der Originalquelle/n (WENN 1 mit 1,2 beantwortet).',
    //     mandatory: true
    //   },
    //   {
    //     id: '4',
    //     content: 'Die Grammatik und Rechtschreibung des Artikels/der Nachricht ist einwandfrei.',
    //     mandatory: true
    //   },
    //   {
    //     id: '5',
    //     content: 'Die Medien (Fotos, Bilder, Videos) im Artikel/in der Nachricht sind echt, stimmen im Kontext und sind zum angegeben Zeitpunkt entstanden/bilden ein Geschehen im angegebenen Zeitpunkt ab.',
    //     mandatory: true
    //   },
    //   {
    //     id: '6',
    //     content: 'Der Internetauftritt (URL Adresse, Logo, Design) des Mediums imitiert keine bereits bekannten Websites und Medien. Dies gilt auch für den Internetauftritt von Medien, deren Links in Nachrichten eingebettet sind. ',
    //     mandatory: true
    //   },
    //   {
    //     id: '7',
    //     content: 'Der Inhalt des Artikels/der Nachricht deckt sich vollständig mit dem in der Überschrift suggerierten Inhalt.',
    //     mandatory: true
    //   },
    //   {
    //     id: '8',
    //     content: 'Der Inhalt des Artikels/der Nachricht deckt sich mit der Berichterstattung öffentlich/rechtlicher Medien und/oder Fachmedien.',
    //     mandatory: true
    //   },
    //   {
    //     id: '9',
    //     content: 'Im Artikel/der Nachricht werden Zitate zur Unterstützung des Inhalts und verschiedener Positionen als zusätzliche Quelle wiedergegeben. ',
    //     mandatory: true
    //   }
    // ]).toPromise();

    return API.get('api', this.questionsUrl, {}).then(
      (value: Question[]) => {
        return value;
      }
    );
  }
}
