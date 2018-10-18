import { TestBed, inject } from '@angular/core/testing';

import { LeerlingService } from './leerling.service';

describe('LeerlingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeerlingService]
    });
  });

  it('should be created', inject([LeerlingService], (service: LeerlingService) => {
    expect(service).toBeTruthy();
  }));
});
