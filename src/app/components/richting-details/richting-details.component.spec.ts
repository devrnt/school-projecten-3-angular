import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichtingComponent } from './richting-details.component';

describe('RichtingComponent', () => {
  let component: RichtingComponent;
  let fixture: ComponentFixture<RichtingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichtingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichtingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
