import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichtingSchermComponent } from './richting-scherm.component';

describe('RichtingSchermComponent', () => {
  let component: RichtingSchermComponent;
  let fixture: ComponentFixture<RichtingSchermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichtingSchermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichtingSchermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
