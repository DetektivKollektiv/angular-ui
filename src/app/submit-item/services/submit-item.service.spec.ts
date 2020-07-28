import { TestBed } from '@angular/core/testing';

import { SubmitItemService } from './submit-item.service';

describe('SubmitItemService', () => {
  let service: SubmitItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
