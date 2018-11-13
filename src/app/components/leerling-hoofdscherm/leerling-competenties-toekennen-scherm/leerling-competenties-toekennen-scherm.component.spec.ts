import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingCompetentiesToekennenSchermComponent } from './leerling-competenties-toekennen-scherm.component';

describe('LeerlingCompetentiesToekennenSchermComponent', () => {
  let component: LeerlingCompetentiesToekennenSchermComponent;
  let fixture: ComponentFixture<LeerlingCompetentiesToekennenSchermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingCompetentiesToekennenSchermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingCompetentiesToekennenSchermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
