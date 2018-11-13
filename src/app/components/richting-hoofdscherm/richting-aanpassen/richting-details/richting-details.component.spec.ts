import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RichtingDetailsComponent } from '../richting-details/richting-details.component';


describe('RichtingComponent', () => {
  let component: RichtingDetailsComponent;
  let fixture: ComponentFixture<RichtingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichtingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichtingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
