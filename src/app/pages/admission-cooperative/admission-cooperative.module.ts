import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CpfConsultService } from '@core/services/cpf-consult/cpf-consult.service';
import { SharedModule } from '@shared/shared.module';

import { AdmissionCooperativeRoutingModule } from './admission-cooperative-routing.module';
import { AdmissionCooperativeComponent } from './admission-cooperative.component';
import { CooperativeCardComponent } from './components/cooperative-card/cooperative-card.component';
import { FirstStepComponent } from './first-step/first-step.component';


@NgModule({
  declarations: [
    AdmissionCooperativeComponent,
    CooperativeCardComponent,
    FirstStepComponent
  ],
  imports: [
    CommonModule,
    AdmissionCooperativeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [ AdmissionCooperativeComponent],
  providers: [CpfConsultService]
})
export class AdmissionCooperativeModule { }
