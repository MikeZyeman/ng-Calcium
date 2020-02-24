import { Directive, ElementRef, HostListener } from '@angular/core';
import { ButtonDirective } from './button.directive';

@Directive({
  selector: '[caButtonPrimary]'
})
export class ButtonPrimaryDirective extends ButtonDirective {

  constructor(public el: ElementRef) {
    super(el.nativeElement);
    this.init();
    this.setStyle(el.nativeElement);
    this.useStandardColors(el.nativeElement);
  }

  init() {
    this.Color = '#FFF';
    this.backgroundColor = '#33C3F0';
    this.borderColor = '#33C3F0';

    this.hoverColor = '#FFF';
    this.hoverbackgroundColor = '#1EAEDB';
    this.hoverborderColor = '#1EAEDB';
  }
}
