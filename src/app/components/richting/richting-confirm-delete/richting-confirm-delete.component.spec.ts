import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichtingConfirmDeleteComponent } from './richting-confirm-delete.component';

describe('RichtingConfirmDeleteComponent', () => {
  let component: RichtingConfirmDeleteComponent;
  let fixture: ComponentFixture<RichtingConfirmDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichtingConfirmDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichtingConfirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
