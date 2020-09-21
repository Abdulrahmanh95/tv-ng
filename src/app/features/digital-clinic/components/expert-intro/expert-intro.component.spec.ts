import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertIntroComponent } from './expert-intro.component';

describe('ExpertIntroComponent', () => {
  let component: ExpertIntroComponent;
  let fixture: ComponentFixture<ExpertIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
