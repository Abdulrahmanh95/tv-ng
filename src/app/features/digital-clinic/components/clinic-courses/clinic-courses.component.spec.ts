import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicCoursesComponent } from './clinic-courses.component';

describe('ClinicCoursesComponent', () => {
  let component: ClinicCoursesComponent;
  let fixture: ComponentFixture<ClinicCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
