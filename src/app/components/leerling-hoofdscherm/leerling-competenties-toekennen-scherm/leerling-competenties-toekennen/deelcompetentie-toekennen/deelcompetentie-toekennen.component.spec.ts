import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeelcompetentieToekennenComponent } from './deelcompetentie-toekennen.component';

describe('DeelcompetentieToekennenComponent', () => {
  let component: DeelcompetentieToekennenComponent;
  let fixture: ComponentFixture<DeelcompetentieToekennenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeelcompetentieToekennenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeelcompetentieToekennenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
