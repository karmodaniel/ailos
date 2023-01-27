import { Component } from '@angular/core';
import { SidenavService } from '@shared/services/menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private menu: SidenavService) {}

  triggerMenu() {
    this.menu.toggle();
  }
}
