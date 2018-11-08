import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingCompetentiesComponent } from './leerling-competenties.component';

describe('LeerlingCompetentiesComponent', () => {
  let component: LeerlingCompetentiesComponent;
  let fixture: ComponentFixture<LeerlingCompetentiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingCompetentiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingCompetentiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
