import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterrorComponent } from './reporterror.component';

describe('ReporterrorComponent', () => {
  let component: ReporterrorComponent;
  let fixture: ComponentFixture<ReporterrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
