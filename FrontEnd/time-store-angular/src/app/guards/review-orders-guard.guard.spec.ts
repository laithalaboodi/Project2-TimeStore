import { TestBed } from '@angular/core/testing';

import { ReviewOrdersGuardGuard } from './review-orders-guard.guard';

describe('ReviewOrdersGuardGuard', () => {
  let guard: ReviewOrdersGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReviewOrdersGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
