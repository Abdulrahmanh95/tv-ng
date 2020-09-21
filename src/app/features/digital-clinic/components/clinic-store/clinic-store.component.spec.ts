import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicStoreComponent } from './clinic-store.component';

describe('ClinicStoreComponent', () => {
  let component: ClinicStoreComponent;
  let fixture: ComponentFixture<ClinicStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
