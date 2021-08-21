import { TestBed } from '@angular/core/testing';

import { UpdateComponentGuardGuard } from './update-component-guard.guard';

describe('UpdateComponentGuardGuard', () => {
  let guard: UpdateComponentGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdateComponentGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
