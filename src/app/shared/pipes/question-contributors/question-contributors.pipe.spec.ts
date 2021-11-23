import { ItemReviewQuestion } from '../../../model/Item-review-question';
import { QuestionContributorsPipe } from './question-contributors.pipe';

describe('QuestionContributorsPipe', () => {
  const question_id = 'test-question';
  const content = 'content';

  const questions: ItemReviewQuestion[] = [
    {
      answer_value: 1,
      question_id,
      answer_id: '1',
      content,
      max_children: 0,
      options: [],
      detective: {
        username: 'user1',
        level_description: 'level'
      }
    },
    {
      answer_value: 2,
      question_id,
      answer_id: '2',
      content,
      max_children: 0,
      options: [],
      detective: {
        username: 'user2',
        level_description: 'level'
      }
    },
    {
      answer_value: 2,
      question_id,
      answer_id: '2',
      content,
      max_children: 0,
      options: [],
      detective: {
        username: 'user3',
        level_description: 'level'
      }
    },
    {
      answer_value: 4,
      question_id,
      answer_id: '4',
      content,
      max_children: 0,
      options: [],
      detective: {
        username: 'user4',
        level_description: 'level'
      }
    }
  ];

  let questionContributorsPipe: QuestionContributorsPipe;

  beforeEach(() => {
    questionContributorsPipe = new QuestionContributorsPipe();
  });

  test.each([
    { option: 1, expected: 1 },
    { option: 2, expected: 2 },
    { option: 3, expected: 0 }
  ])('transform $option to $expected', ({ option, expected }) => {
    expect(questionContributorsPipe.transform(option, question_id, questions).length).toBe(expected);
  });
});
