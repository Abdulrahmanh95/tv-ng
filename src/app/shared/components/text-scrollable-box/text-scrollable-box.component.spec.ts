import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextScrollableBoxComponent } from './text-scrollable-box.component';

describe('TextScrollableBoxComponent', () => {
  let component: TextScrollableBoxComponent;
  let fixture: ComponentFixture<TextScrollableBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextScrollableBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextScrollableBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
