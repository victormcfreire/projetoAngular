import { TestBed } from '@angular/core/testing';

import { UserResolverGuard } from './user-resolver.guard';

describe('UserResolverGuard', () => {
  let guard: UserResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
