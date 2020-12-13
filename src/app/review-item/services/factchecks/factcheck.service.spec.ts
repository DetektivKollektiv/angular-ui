import {TestBed} from '@angular/core/testing';

import {FactCheckService} from './fact-check.service';

describe('FactcheckService', () => {
  let service: FactCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
