import { TestBed } from '@angular/core/testing';

import { ResortService } from './resort.service';

describe('ResortService', () => {
  let service: ResortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
