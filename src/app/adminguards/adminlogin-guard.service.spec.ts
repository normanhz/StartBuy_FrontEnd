import { TestBed } from '@angular/core/testing';

import { AdminloginGuardService } from './adminlogin-guard.service';

describe('AdminloginGuardService', () => {
  let service: AdminloginGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminloginGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
