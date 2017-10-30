import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceResultsComponent } from './device-results.component';

describe('DeviceResultsComponent', () => {
  let component: DeviceResultsComponent;
  let fixture: ComponentFixture<DeviceResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
