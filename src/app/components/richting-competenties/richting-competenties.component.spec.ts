import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichtingCompetentiesComponent } from './richting-competenties.component';

describe('RichtingCompetentiesComponent', () => {
  let component: RichtingCompetentiesComponent;
  let fixture: ComponentFixture<RichtingCompetentiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichtingCompetentiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichtingCompetentiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
