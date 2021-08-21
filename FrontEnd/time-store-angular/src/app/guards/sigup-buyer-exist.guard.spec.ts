import { TestBed } from '@angular/core/testing';

import { SigupBuyerExistGuard } from './sigup-buyer-exist.guard';

describe('SigupBuyerExistGuard', () => {
  let guard: SigupBuyerExistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SigupBuyerExistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
