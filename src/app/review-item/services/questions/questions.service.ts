import {Injectable} from '@angular/core';
import {Question} from '../../model/question';
import {API} from 'aws-amplify';
import {Review} from '../../model/review';
import {OperationResult} from '../../../shared/helper/model/operation-result';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private questionsUrl = '/review_questions';

  constructor() {
  }

  public getNextQuestion(review: Review, previousQuestion: Question): Promise<OperationResult<Question>> {
    const init = previousQuestion !== null
      ? {
        queryStringParameters: {
          review_id: review?.id,
          previous_question_id: previousQuestion?.id
        },
        response: true
      } : {
        queryStringParameters: {
          review_id: review?.id
        },
        response: true
      };

    return new Promise<OperationResult<Question>>((resolve, reject) => {
      API.get('api', this.questionsUrl, init).then(
        value => {
          if (value.status === 200) {
            resolve({
              success: true,
              payload: value.data,
              message: null
            });
          } else if (value.status === 204) {
            resolve({
              success: true,
              payload: null,
              message: null
            });
          } else {
            reject();
          }
        });
    });
  }
}
