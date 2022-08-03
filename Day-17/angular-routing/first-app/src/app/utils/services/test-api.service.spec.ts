import { TestBed } from '@angular/core/testing';

import { TestApiService } from './test-api.service';

describe('TestApiService', () => {
  let service: TestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
