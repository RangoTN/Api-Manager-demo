import { TestBed } from '@angular/core/testing';

import { EtatApiService } from './etat-api.service';

describe('EtatApiService', () => {
  let service: EtatApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
