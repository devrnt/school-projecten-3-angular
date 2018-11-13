import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoofdcompetentieCardComponent } from './hoofdcompetentie-card.component';

describe('HoofdcompetentieComponent', () => {
  let component: HoofdcompetentieCardComponent;
  let fixture: ComponentFixture<HoofdcompetentieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoofdcompetentieCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoofdcompetentieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
