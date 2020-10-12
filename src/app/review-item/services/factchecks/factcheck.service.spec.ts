import { TestBed } from '@angular/core/testing';

import { FactcheckService } from './factcheck.service';

describe('FactcheckService', () => {
  let service: FactcheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactcheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
