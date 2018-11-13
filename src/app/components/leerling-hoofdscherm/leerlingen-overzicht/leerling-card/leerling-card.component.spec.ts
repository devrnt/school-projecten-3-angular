import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeerlingCardComponent } from './leerling-card.component';
 describe('LeerlingComponent', () => {
  let component: LeerlingCardComponent;
  let fixture: ComponentFixture<LeerlingCardComponent>;
   beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingCardComponent ]
    })
    .compileComponents();
  }));
   beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   it('should create', () => {
    expect(component).toBeTruthy();
  });
});
