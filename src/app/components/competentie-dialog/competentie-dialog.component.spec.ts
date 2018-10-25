import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetentieDialogComponent } from './competentie-dialog.component';

describe('CompetentieDialogComponent', () => {
  let component: CompetentieDialogComponent;
  let fixture: ComponentFixture<CompetentieDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetentieDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetentieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
