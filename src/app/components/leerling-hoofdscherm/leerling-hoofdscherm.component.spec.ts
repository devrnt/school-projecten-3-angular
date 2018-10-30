import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeerlingHoofdschermComponent } from './leerling-hoofdscherm.component';

describe('LeerlingHoofdschermComponent', () => {
  let component: LeerlingHoofdschermComponent;
  let fixture: ComponentFixture<LeerlingHoofdschermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingHoofdschermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingHoofdschermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
