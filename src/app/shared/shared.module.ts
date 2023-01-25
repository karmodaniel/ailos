import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBadgeIconDirective } from './directives/mat-badge-icon.directive';

const modules = [
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatBadgeModule,
];

@NgModule({
  declarations: [
    MatBadgeIconDirective
  ],
  imports: [CommonModule, ...modules],
  exports: [...modules, MatBadgeIconDirective],
})
export class SharedModule {}
