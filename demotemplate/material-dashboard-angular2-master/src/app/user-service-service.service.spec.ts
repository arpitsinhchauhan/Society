import { TestBed } from '@angular/core/testing';

import { UserServiceServiceService } from './user-service-service.service';

describe('UserServiceServiceService', () => {
  let service: UserServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
