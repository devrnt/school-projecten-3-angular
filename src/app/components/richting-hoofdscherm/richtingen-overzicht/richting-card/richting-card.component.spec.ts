import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 import { RichtingCardComponent } from './richting-card.component';
 describe('RichtingComponent', () => {
  let component: RichtingCardComponent;
  let fixture: ComponentFixture<RichtingCardComponent>;
   beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichtingCardComponent ]
    })
    .compileComponents();
  }));
   beforeEach(() => {
    fixture = TestBed.createComponent(RichtingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   it('should create', () => {
    expect(component).toBeTruthy();
  });
});
