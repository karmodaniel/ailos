import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WindowService } from '@shared/services/window/window.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  public isExpanded = false;
  private subscription$: Subscription;
  constructor(private windowSizeServie: WindowService) {}

  ngOnInit(): void {
    this.subscription$ = this.windowSizeServie
      .currentWindowSize()
      .subscribe((size) => {
        if (size <= 1200) {
          this.isExpanded = true;
          return;
        }

        this.isExpanded = false;
      });
  }

  handleMenuClick() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
