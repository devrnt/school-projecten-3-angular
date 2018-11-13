import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingenOverzichtComponent } from './leerlingen-overzicht.component';

describe('RichtingenViewComponent', () => {
  let component: LeerlingenOverzichtComponent;
  let fixture: ComponentFixture<LeerlingenOverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingenOverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingenOverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
