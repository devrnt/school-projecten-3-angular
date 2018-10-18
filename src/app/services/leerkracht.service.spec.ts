import { TestBed, inject } from '@angular/core/testing';

import { LeerkrachtService } from './leerkracht.service';

describe('LeerkrachtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeerkrachtService]
    });
  });

  it('should be created', inject([LeerkrachtService], (service: LeerkrachtService) => {
    expect(service).toBeTruthy();
  }));
});
