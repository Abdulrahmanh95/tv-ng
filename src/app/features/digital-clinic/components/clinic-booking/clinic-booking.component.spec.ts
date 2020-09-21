import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicBookingComponent } from './clinic-booking.component';

describe('ClinicBookingComponent', () => {
  let component: ClinicBookingComponent;
  let fixture: ComponentFixture<ClinicBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
