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
    return API.get('api', this.questionsUrl, {}).then(
      (value: Question[]) => {
        return value;
      }
    );
  }
}
