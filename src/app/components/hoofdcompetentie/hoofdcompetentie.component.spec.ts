import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoofdcompetentieComponent } from './hoofdcompetentie.component';

describe('HoofdcompetentieComponent', () => {
  let component: HoofdcompetentieComponent;
  let fixture: ComponentFixture<HoofdcompetentieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoofdcompetentieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoofdcompetentieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
