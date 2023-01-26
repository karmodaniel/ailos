import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { MatBadgeIconDirective } from './directives/mat-badge-icon.directive';



const modules = [
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatBadgeModule,
  MatStepperModule,
  NgxMaskDirective,
  NgxMaskPipe
];

@NgModule({
  declarations: [
    MatBadgeIconDirective
  ],
  imports: [CommonModule, ...modules],
  exports: [...modules, MatBadgeIconDirective],
  providers: [provideNgxMask()]
})
export class SharedModule {}
