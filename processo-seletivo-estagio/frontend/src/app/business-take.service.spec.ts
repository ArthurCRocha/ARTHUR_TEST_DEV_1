import { TestBed } from '@angular/core/testing';

import { BusinessTakeService } from './business-take.service';

describe('BusinessTakeService', () => {
  let service: BusinessTakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessTakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
