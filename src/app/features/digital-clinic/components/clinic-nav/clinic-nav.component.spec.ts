import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicNavComponent } from './clinic-nav.component';

describe('ClinicNavComponent', () => {
  let component: ClinicNavComponent;
  let fixture: ComponentFixture<ClinicNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
