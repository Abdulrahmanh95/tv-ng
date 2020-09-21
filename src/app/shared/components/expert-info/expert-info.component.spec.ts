import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertInfoComponent } from './expert-info.component';

describe('ExpertInfoComponent', () => {
  let component: ExpertInfoComponent;
  let fixture: ComponentFixture<ExpertInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
