import { TestBed, inject } from '@angular/core/testing';

import { RichtingService } from './richting.service';

describe('RichtingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RichtingService]
    });
  });

  it('should be created', inject([RichtingService], (service: RichtingService) => {
    expect(service).toBeTruthy();
  }));
});
