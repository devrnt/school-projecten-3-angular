import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingCompetentiesToekennenComponent } from './leerling-competenties-toekennen.component';

describe('LeerlingCompetentiesToekennenComponent', () => {
  let component: LeerlingCompetentiesToekennenComponent;
  let fixture: ComponentFixture<LeerlingCompetentiesToekennenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingCompetentiesToekennenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingCompetentiesToekennenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
