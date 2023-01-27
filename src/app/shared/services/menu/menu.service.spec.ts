import { MatSidenav } from '@angular/material/sidenav';
import { TestBed } from '@angular/core/testing';

import { SidenavService } from './menu.service';

describe('SidenavService', () => {
  let service: SidenavService;
  let sidenav: MatSidenav;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidenavService],
    });
    service = TestBed.inject(SidenavService);
    sidenav = jasmine.createSpyObj('MatSidenav', ['open', 'close', 'toggle']);
    service.setSidenav(sidenav);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open the sidenav', () => {
    service.open();
    expect(sidenav.open).toHaveBeenCalled();
  });

  it('should close the sidenav', () => {
    service.close();
    expect(sidenav.close).toHaveBeenCalled();
  });

  it('should toggle the sidenav', () => {
    service.toggle();
    expect(sidenav.toggle).toHaveBeenCalled();
  });
});
