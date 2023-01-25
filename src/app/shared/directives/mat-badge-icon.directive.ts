import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[matBadgeIcon]',
})
export class MatBadgeIconDirective implements OnInit {
  @Input() matBadgeIcon: string = '';
  @Input() matBadgeIconColor: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!this.matBadgeIcon) return;

    const badge = this.el.nativeElement.querySelector('.mat-badge-content');
    badge.style.display = 'flex';
    badge.style.alignItems = 'center';
    badge.style.background = 'transparent';
    badge.style.color = this.matBadgeIconColor;
    badge.style.justifyContent = 'center';
    badge.innerHTML = `<mat-icon class="mat-icon notranslate mat-badge material-icons mat-icon-no-color mat-badge-overlap mat-badge-above mat-badge-after mat-badge-medium">${this.matBadgeIcon}</mat-icon>`;
  }
}
