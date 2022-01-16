import { DatePipe } from '@angular/common';
import { ExtendedDatePipe } from './extended-date.pipe';

describe('ExtendedDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ExtendedDatePipe(new DatePipe('de-DE'));
    expect(pipe).toBeTruthy();
  });
});
