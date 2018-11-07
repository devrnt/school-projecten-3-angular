import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingSchermComponent } from './leerling-scherm.component';

describe('LeerlingSchermComponent', () => {
  let component: LeerlingSchermComponent;
  let fixture: ComponentFixture<LeerlingSchermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingSchermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingSchermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
