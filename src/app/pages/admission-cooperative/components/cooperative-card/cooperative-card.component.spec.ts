import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeCardComponent } from './cooperative-card.component';

describe('CooperativeCardComponent', () => {
  let component: CooperativeCardComponent;
  let fixture: ComponentFixture<CooperativeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperativeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
