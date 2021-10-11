import { TestBed } from '@angular/core/testing';

import { CowsService } from './cows.service';

describe('CowsService', () => {
  let service: CowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
