import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingConfirmDeleteComponent } from './leerling-confirm-delete.component';

describe('RichtingConfirmDeleteComponent', () => {
  let component: LeerlingConfirmDeleteComponent;
  let fixture: ComponentFixture<LeerlingConfirmDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingConfirmDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingConfirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
