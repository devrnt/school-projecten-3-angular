import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichtingenViewComponent } from './richtingen-view.component';

describe('RichtingenViewComponent', () => {
  let component: RichtingenViewComponent;
  let fixture: ComponentFixture<RichtingenViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichtingenViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichtingenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
