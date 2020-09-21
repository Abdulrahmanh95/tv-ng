import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicBroadcastComponent } from './clinic-broadcast.component';

describe('ClinicBroadcastComponent', () => {
  let component: ClinicBroadcastComponent;
  let fixture: ComponentFixture<ClinicBroadcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicBroadcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicBroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
