import { CaseIdPipe } from './case-id.pipe';

describe('CaseIdPipe', () => {
  let caseIdPipe: CaseIdPipe;

  beforeEach(() => {
    caseIdPipe = new CaseIdPipe();
  });

  test.each([
    { initial: '718713a4-d9d0-4b6f-847a-48e74d26ff01', expected: '#718713a4' },
    { initial: '', expected: '#unknown' },
    { initial: null, expected: '#unknown' },
    { initial: undefined, expected: '#unknown' }
  ])('transform $initial to $expected', ({ initial, expected }) => {
    expect(caseIdPipe.transform(initial)).toBe(expected);
  });
});
