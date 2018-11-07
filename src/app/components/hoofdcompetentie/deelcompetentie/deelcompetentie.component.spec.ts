import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeelcompetentieComponent } from './deelcompetentie.component';

describe('DeelcompetentieComponent', () => {
  let component: DeelcompetentieComponent;
  let fixture: ComponentFixture<DeelcompetentieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeelcompetentieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeelcompetentieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
