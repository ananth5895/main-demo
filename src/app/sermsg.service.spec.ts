import { TestBed } from '@angular/core/testing';

import { SermsgService } from './sermsg.service';

describe('SermsgService', () => {
  let service: SermsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SermsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
