import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { WindowService } from '@shared/services/window/window.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admission-cooperative',
  templateUrl: './admission-cooperative.component.html',
  styleUrls: ['./admission-cooperative.component.scss'],
})
export class AdmissionCooperativeComponent implements OnInit, OnDestroy {
  public stepperOrientation: StepperOrientation = 'horizontal';
  private subscription$: Subscription = new Subscription();
 
  constructor(private windowsSizeService: WindowService) {}

  ngOnInit(): void {
    this.subscription$ = this.windowsSizeService.currentWindowSize().subscribe((size) => {
      if (size <= 1200) {
        this.stepperOrientation = 'vertical';
        return;
      }
      this.stepperOrientation = 'horizontal';
    });    
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
