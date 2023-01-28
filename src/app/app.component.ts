import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '@shared/services/menu/menu.service';
import { WindowService } from '@shared/services/window/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  public navigationMode: MatDrawerMode = 'side';
  public navigationAwaysOpened: boolean = true;
  public hasBackdrop: boolean = true;
  private windowSize: number = 0;

  @ViewChild('menu') public sidenav: MatSidenav;

constructor(private sidenavService: SidenavService, private windowsSizeService: WindowService) {
}

ngAfterViewInit(): void {
  this.sidenavService.setSidenav(this.sidenav);
}

  ngOnInit(): void {
    this.windowSize = window.innerWidth;
    this.windowsSizeService.setWindowSize(window.innerWidth);
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowsSizeService.setWindowSize(window.innerWidth);
    this.windowSize = window.innerWidth;
    if (this.windowSize <= 1200) {
      this.navigationMode = 'over';
      this.navigationAwaysOpened = false;
      this.hasBackdrop = true;
      return;
    }

    this.hasBackdrop = false;
    this.navigationMode = 'side';
    this.navigationAwaysOpened = true;
  }
}
