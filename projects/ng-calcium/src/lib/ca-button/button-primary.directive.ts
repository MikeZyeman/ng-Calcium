import { Directive, ElementRef } from '@angular/core';
import { ButtonDirective } from './button.directive';
import { BtnColors } from './btnColor.Interface';

const colors: BtnColors = {
  Color: '#FFF',
  backgroundColor: '#33C3F0',
  borderColor: '#33C3F0',

  hoverColor: '#FFF',
  hoverbackgroundColor: '#1EAEDB',
  hoverborderColor: '#1EAEDB',
}

@Directive({
  selector: '[caButtonPrimary]',
  exportAs: 'caButtonPrimary'
})
export class ButtonPrimaryDirective extends ButtonDirective {

  constructor(public el: ElementRef) {
    super(el);

    this.setColors(colors);
  }
}
