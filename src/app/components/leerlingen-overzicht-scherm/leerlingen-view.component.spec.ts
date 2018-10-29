import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingenViewComponent } from './leerlingen-view.component';

describe('RichtingenViewComponent', () => {
  let component: LeerlingenViewComponent;
  let fixture: ComponentFixture<LeerlingenViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingenViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
