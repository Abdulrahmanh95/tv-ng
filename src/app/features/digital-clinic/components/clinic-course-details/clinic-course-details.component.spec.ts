import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicCourseDetailsComponent } from './clinic-course-details.component';

describe('ClinicCourseDetailsComponent', () => {
  let component: ClinicCourseDetailsComponent;
  let fixture: ComponentFixture<ClinicCourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicCourseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
