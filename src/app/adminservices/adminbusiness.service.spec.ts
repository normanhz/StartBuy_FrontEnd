import { TestBed } from '@angular/core/testing';

import { AdminbusinessService } from './adminbusiness.service';

describe('AdminbusinessService', () => {
  let service: AdminbusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminbusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
