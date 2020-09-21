import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClinicComponent } from './digital-clinic.component';

describe('DigitalClinicComponent', () => {
  let component: DigitalClinicComponent;
  let fixture: ComponentFixture<DigitalClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
