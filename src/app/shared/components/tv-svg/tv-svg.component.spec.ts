import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSvgComponent } from './tv-svg.component';

describe('TvSvgComponent', () => {
  let component: TvSvgComponent;
  let fixture: ComponentFixture<TvSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
