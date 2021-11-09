import { from, Observable, of } from 'rxjs';
import { Review } from 'src/app/review-item/model/review';
import { IReviewService } from '../reviews.service';

const mock_review = {
  id: 'c46697fa-1f78-4184-a10d-0de4821d47f9',
  is_peer_review: true,
  belongs_to_good_pair: null,
  user_id: '11',
  start_timestamp: '2021-04-06 17:11:39',
  finish_timestamp: 'None',
  questions: [
    {
      answer_id: '306979ce-3144-49d4-8e00-7803b89137a6',
      question_id: '2',
      content: 'Frage 2',
      info: '2',
      hint: null,
      lower_bound: null,
      upper_bound: null,
      parent_question_id: null,
      max_children: 1,
      answer_value: null,
      comment: null,
      options: [
        {
          id: '4',
          text: 'Trifft zu',
          tooltip: 'Trifft zu Tooltip',
          value: 4
        },
        {
          id: '3',
          text: 'Trifft eher zu',
          tooltip: 'Trifft eher zu Tooltip',
          value: 3
        },
        {
          id: '2',
          text: 'Trifft eher nicht zu',
          tooltip: 'Trifft eher nicht zu Tooltip',
          value: 2
        },
        {
          id: '1',
          text: 'Trifft nicht zu',
          tooltip: 'Trifft nicht zu Tooltip',
          value: 1
        },
        {
          id: '0',
          text: 'Nicht anwendbar',
          tooltip: 'Nicht anwendbar Tooltip',
          value: 0
        }
      ]
    },
    {
      answer_id: '6bef8baa-e8c5-4435-b2b7-81a58a0c9529',
      question_id: '2a',
      content: '2a',
      info: null,
      hint: null,
      lower_bound: 3,
      upper_bound: 4,
      parent_question_id: '2',
      max_children: 0,
      answer_value: null,
      comment: null,
      options: [
        {
          id: '4',
          text: 'Trifft zu',
          tooltip: 'Trifft zu Tooltip',
          value: 4
        },
        {
          id: '3',
          text: 'Trifft eher zu',
          tooltip: 'Trifft eher zu Tooltip',
          value: 3
        },
        {
          id: '2',
          text: 'Trifft eher nicht zu',
          tooltip: 'Trifft eher nicht zu Tooltip',
          value: 2
        },
        {
          id: '1',
          text: 'Trifft nicht zu',
          tooltip: 'Trifft nicht zu Tooltip',
          value: 1
        },
        {
          id: '0',
          text: 'Nicht anwendbar',
          tooltip: 'Nicht anwendbar Tooltip',
          value: 0
        }
      ]
    },
    {
      answer_id: '95caa4d9-8c68-4ba8-ae46-a22b318cf752',
      question_id: '2b',
      content: '2b',
      info: null,
      hint: null,
      lower_bound: 1,
      upper_bound: 2,
      parent_question_id: '2',
      max_children: 0,
      answer_value: null,
      comment: null,
      options: [
        {
          id: '4',
          text: 'Trifft zu',
          tooltip: 'Trifft zu Tooltip',
          value: 4
        },
        {
          id: '3',
          text: 'Trifft eher zu',
          tooltip: 'Trifft eher zu Tooltip',
          value: 3
        },
        {
          id: '2',
          text: 'Trifft eher nicht zu',
          tooltip: 'Trifft eher nicht zu Tooltip',
          value: 2
        },
        {
          id: '1',
          text: 'Trifft nicht zu',
          tooltip: 'Trifft nicht zu Tooltip',
          value: 1
        },
        {
          id: '0',
          text: 'Nicht anwendbar',
          tooltip: 'Nicht anwendbar Tooltip',
          value: 0
        }
      ]
    },
    {
      answer_id: 'e4a3027d-357d-4dd0-b07e-ece2ff87bbc3',
      question_id: '4',
      content: 'Frage 4',
      info: '4',
      hint: null,
      lower_bound: null,
      upper_bound: null,
      parent_question_id: null,
      max_children: 0,
      answer_value: null,
      comment: null,
      options: [
        {
          id: '4',
          text: 'Trifft zu',
          tooltip: 'Trifft zu Tooltip',
          value: 4
        },
        {
          id: '3',
          text: 'Trifft eher zu',
          tooltip: 'Trifft eher zu Tooltip',
          value: 3
        },
        {
          id: '2',
          text: 'Trifft eher nicht zu',
          tooltip: 'Trifft eher nicht zu Tooltip',
          value: 2
        },
        {
          id: '1',
          text: 'Trifft nicht zu',
          tooltip: 'Trifft nicht zu Tooltip',
          value: 1
        },
        {
          id: '0',
          text: 'Nicht anwendbar',
          tooltip: 'Nicht anwendbar Tooltip',
          value: 0
        }
      ]
    },
    {
      answer_id: '15b751ac-a43f-47be-b691-ef3a63acd521',
      question_id: '8',
      content: 'Frage 8',
      info: '8',
      hint: null,
      lower_bound: null,
      upper_bound: null,
      parent_question_id: null,
      max_children: 0,
      answer_value: null,
      comment: null,
      options: [
        {
          id: '4',
          text: 'Trifft zu',
          tooltip: 'Trifft zu Tooltip',
          value: 4
        },
        {
          id: '3',
          text: 'Trifft eher zu',
          tooltip: 'Trifft eher zu Tooltip',
          value: 3
        },
        {
          id: '2',
          text: 'Trifft eher nicht zu',
          tooltip: 'Trifft eher nicht zu Tooltip',
          value: 2
        },
        {
          id: '1',
          text: 'Trifft nicht zu',
          tooltip: 'Trifft nicht zu Tooltip',
          value: 1
        },
        {
          id: '0',
          text: 'Nicht anwendbar',
          tooltip: 'Nicht anwendbar Tooltip',
          value: 0
        }
      ]
    },
    {
      answer_id: '5dddf667-f3a1-491e-9e9a-55b99beeece9',
      question_id: '7',
      content: 'Frage 7',
      info: '7',
      hint: null,
      lower_bound: null,
      upper_bound: null,
      parent_question_id: null,
      max_children: 0,
      answer_value: null,
      comment: null,
      options: [
        {
          id: '4',
          text: 'Trifft zu',
          tooltip: 'Trifft zu Tooltip',
          value: 4
        },
        {
          id: '3',
          text: 'Trifft eher zu',
          tooltip: 'Trifft eher zu Tooltip',
          value: 3
        },
        {
          id: '2',
          text: 'Trifft eher nicht zu',
          tooltip: 'Trifft eher nicht zu Tooltip',
          value: 2
        },
        {
          id: '1',
          text: 'Trifft nicht zu',
          tooltip: 'Trifft nicht zu Tooltip',
          value: 1
        },
        {
          id: '0',
          text: 'Nicht anwendbar',
          tooltip: 'Nicht anwendbar Tooltip',
          value: 0
        }
      ]
    },
    {
      answer_id: 'a141a388-d349-456c-8f30-ee6c15b23268',
      question_id: '6',
      content: 'Frage 6',
      info: '6',
      hint: null,
      lower_bound: null,
      upper_bound: null,
      parent_question_id: null,
      max_children: 0,
      answer_value: null,
      comment: null,
      options: [
        {
          id: '4',
          text: 'Trifft zu',
          tooltip: 'Trifft zu Tooltip',
          value: 4
        },
        {
          id: '3',
          text: 'Trifft eher zu',
          tooltip: 'Trifft eher zu Tooltip',
          value: 3
        },
        {
          id: '2',
          text: 'Trifft eher nicht zu',
          tooltip: 'Trifft eher nicht zu Tooltip',
          value: 2
        },
        {
          id: '1',
          text: 'Trifft nicht zu',
          tooltip: 'Trifft nicht zu Tooltip',
          value: 1
        },
        {
          id: '0',
          text: 'Nicht anwendbar',
          tooltip: 'Nicht anwendbar Tooltip',
          value: 0
        }
      ]
    },
    {
      answer_id: '1d06349c-f8af-4407-82e5-613b715d4738',
      question_id: '10',
      content: 'Frage 10',
      info: '10',
      hint: null,
      lower_bound: null,
      upper_bound: null,
      parent_question_id: null,
      max_children: 0,
      answer_value: null,
      comment: null,
      options: [
        {
          id: '4',
          text: 'Trifft zu',
          tooltip: 'Trifft zu Tooltip',
          value: 4
        },
        {
          id: '3',
          text: 'Trifft eher zu',
          tooltip: 'Trifft eher zu Tooltip',
          value: 3
        },
        {
          id: '2',
          text: 'Trifft eher nicht zu',
          tooltip: 'Trifft eher nicht zu Tooltip',
          value: 2
        },
        {
          id: '1',
          text: 'Trifft nicht zu',
          tooltip: 'Trifft nicht zu Tooltip',
          value: 1
        },
        {
          id: '0',
          text: 'Nicht anwendbar',
          tooltip: 'Nicht anwendbar Tooltip',
          value: 0
        }
      ]
    }
  ]
} as Review;

export class MockReviewService implements IReviewService {
  getOpenReview(): Observable<Review> {
    return of(mock_review);
  }
  getReview(id: string): Observable<Review> {
    return of(mock_review);
  }
  createReview(item_id: string): Observable<Review> {
    return of(mock_review);
  }
  updateReview(review: Review): Observable<void> {
    return of(void 0);
  }
}
