import { TextOverflowPipe } from './text-overflow.pipe';

describe('TextOverflowPipe', () => {
  let textOverflowPipe: TextOverflowPipe;

  beforeEach(() => {
    textOverflowPipe = new TextOverflowPipe();
  });

  test.each([
    { initial: 'short', maxLength: 10, expected: 'short' },
    { initial: 'some very long text', maxLength: 10, expected: 'some very ...' },
    { initial: 'some very long text', maxLength: 20, expected: 'some very long text' },
    { initial: 'some very long text', maxLength: 0, expected: 'some very long text' },
    { initial: 'some very long text', maxLength: null, expected: 'some very long text' },
    { initial: '', maxLength: 1, expected: '' },
    { initial: null, maxLength: 1, expected: null }
  ])('truncate $initial to $expected with length of $maxLength', ({ initial, maxLength, expected }) => {
    expect(textOverflowPipe.transform(initial, maxLength)).toBe(expected);
  });
});
