import { TestBed } from '@angular/core/testing';

import { SautTandemService } from './saut-tandem.service';

describe('SautTandemService', () => {
  let service: SautTandemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SautTandemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
