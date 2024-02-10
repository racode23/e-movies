import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandalingService } from './global-error-handaling.service';

describe('GlobalErrorHandalingService', () => {
  let service: GlobalErrorHandalingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalErrorHandalingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
