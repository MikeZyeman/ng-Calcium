import { Directive, ElementRef } from '@angular/core';
import { ButtonDirective } from './button.directive';
import { BtnColors } from './btnColor.Interface';

const colors: BtnColors = {
  Color: '#FFF',
  backgroundColor: '#ff7366',
  borderColor: '#ff7366',

  hoverColor: '#FFF',
  hoverbackgroundColor:'#f03f33',
  hoverborderColor: '#f03f33'
};

@Directive({
  selector: '[caButtonError]'
})
export class ButtonErrorDirective extends ButtonDirective {

  constructor(public el: ElementRef) {
    super(el);

    this.setColors(colors);
  }

}
