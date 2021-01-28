import { TestBed } from '@angular/core/testing';

import { ItemTypesService } from './item-types.service';

describe('ItemTypesService', () => {
  let service: ItemTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
