import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichtingenOverzichtComponent } from './richtingen-overzicht.component';

describe('RichtingenViewComponent', () => {
  let component: RichtingenOverzichtComponent;
  let fixture: ComponentFixture<RichtingenOverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichtingenOverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichtingenOverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
