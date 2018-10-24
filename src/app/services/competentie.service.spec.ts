import { TestBed, inject } from '@angular/core/testing';

import { CompetentieService } from './competentie.service';

describe('CompetentieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompetentieService]
    });
  });

  it('should be created', inject([CompetentieService], (service: CompetentieService) => {
    expect(service).toBeTruthy();
  }));
});
