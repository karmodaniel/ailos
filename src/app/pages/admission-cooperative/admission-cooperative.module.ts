import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CpfConsultService } from 'src/app/core/services/cpf-consult/cpf-consult.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { AdmissionCooperativeRoutingModule } from './admission-cooperative-routing.module';
import { AdmissionCooperativeComponent } from './admission-cooperative.component';


@NgModule({
  declarations: [
    AdmissionCooperativeComponent
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
