import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichtingAanpassenComponent } from './richting-aanpassen.component';

describe('RichtingSchermComponent', () => {
  let component: RichtingAanpassenComponent;
  let fixture: ComponentFixture<RichtingAanpassenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichtingAanpassenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichtingAanpassenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
