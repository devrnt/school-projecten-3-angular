import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeerlingComponent } from './leerling.component';
 describe('LeerlingComponent', () => {
  let component: LeerlingComponent;
  let fixture: ComponentFixture<LeerlingComponent>;
   beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingComponent ]
    })
    .compileComponents();
  }));
   beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   it('should create', () => {
    expect(component).toBeTruthy();
  });
});
