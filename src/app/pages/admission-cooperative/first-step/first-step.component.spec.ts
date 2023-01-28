import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepComponent } from './first-step.component';

describe('FirstStepComponent', () => {
  let component: FirstStepComponent;
  let fixture: ComponentFixture<FirstStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstStepComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
