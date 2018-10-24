import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichtingOverzichtSchermComponent } from './richting-overzicht-scherm.component';

describe('RichtingOverzichtSchermComponent', () => {
  let component: RichtingOverzichtSchermComponent;
  let fixture: ComponentFixture<RichtingOverzichtSchermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichtingOverzichtSchermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichtingOverzichtSchermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
