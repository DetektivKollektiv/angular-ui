import { ItemReviewQuestion } from 'src/app/model/Item-review-question';
import { AnswerPercentagePipe } from './answer-percentage.pipe';

describe('AnswerPercentagePipe', () => {
  const question_id = 'test-question';
  const content = 'content';

  const questions: ItemReviewQuestion[] = [
    {
      answer_value: 1,
      question_id,
      answer_id: '1',
      content,
      max_children: 0,
      options: []
    },
    {
      answer_value: 2,
      question_id,
      answer_id: '2',
      content,
      max_children: 0,
      options: []
    },
    {
      answer_value: 2,
      question_id,
      answer_id: '2',
      content,
      max_children: 0,
      options: []
    },
    {
      answer_value: 4,
      question_id,
      answer_id: '4',
      content,
      max_children: 0,
      options: []
    }
  ];

  let caseIdPipe: AnswerPercentagePipe;

  beforeEach(() => {
    caseIdPipe = new AnswerPercentagePipe();
  });

  test.each([
    { option: 1, expected: 25 },
    { option: 2, expected: 50 },
    { option: 3, expected: 0 },
    { option: 15, expected: 0 }
  ])('transform $option to $expected', ({ option, expected }) => {
    expect(caseIdPipe.transform(option, question_id, questions)).toBe(expected);
  });
});
