import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingDetailsComponent } from './leerling-details.component';

describe('LeerlingDetailsComponent', () => {
  let component: LeerlingDetailsComponent;
  let fixture: ComponentFixture<LeerlingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
