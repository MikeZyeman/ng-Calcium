import { Directive, ElementRef } from '@angular/core';
import { ButtonDirective } from './button.directive';
import { BtnColors } from './btnColor.Interface';

const colors: BtnColors = {
  Color: '#FFF',
  backgroundColor: '#f0cd33',
  borderColor: '#f0cd33',

  hoverColor: '#FFF',
  hoverbackgroundColor: '#d1b02a',
  hoverborderColor: '#d1b02a',
}

@Directive({
  selector: '[caButtonWarning]'
})
export class ButtonWarningDirective extends ButtonDirective {

  constructor(public el: ElementRef) {
    super(el);

    this.setColors(colors);
  }
}
