import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionCooperativeComponent } from './admission-cooperative.component';

describe('AdmissionCooperativeComponent', () => {
  let component: AdmissionCooperativeComponent;
  let fixture: ComponentFixture<AdmissionCooperativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionCooperativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionCooperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
