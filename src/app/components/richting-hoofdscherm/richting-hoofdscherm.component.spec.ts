import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichtingHoofdschermComponent } from './richting-hoofdscherm.component';

describe('RichtingHoofdschermComponent', () => {
  let component: RichtingHoofdschermComponent;
  let fixture: ComponentFixture<RichtingHoofdschermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichtingHoofdschermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichtingHoofdschermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
