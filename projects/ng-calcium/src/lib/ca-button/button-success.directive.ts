import { Directive, ElementRef } from '@angular/core';
import { ButtonDirective } from './button.directive';
import { BtnColors } from './btnColor.Interface';


const colors: BtnColors = {
  Color: '#FFF',
  backgroundColor: '#33f05f',
  borderColor: '#33f05f',

  hoverColor: '#FFF',
  hoverbackgroundColor: '#58d675',
  hoverborderColor: '#58d675',
}

@Directive({
  selector: '[caButtonSuccess]'
})
export class ButtonSuccessDirective extends ButtonDirective {

  constructor(public el: ElementRef) {
    super(el);

    this.setColors(colors);
  }

}
