import { Directive, ElementRef, HostListener } from '@angular/core';
import { BtnColors } from './btnColor.Interface';

const sColor: BtnColors = {
  Color: '#555',
  backgroundColor: '#FFF',
  borderColor: '#bbb',

  hoverColor: '#333',
  hoverbackgroundColor:'#FFF',
  hoverborderColor: '#888',
};

@Directive({
  selector: '[caButton]'
})
export class ButtonDirective {

  Color = '#555';
  backgroundColor = '#FFF';
  borderColor = '#bbb';

  hoverColor = '#333';
  hoverbackgroundColor = '#FFF';
  hoverborderColor = '#888';

  constructor(public el: ElementRef) {
    const NE = this.el.nativeElement.style;

    this.setStyle(NE);
    this.setColors(NE);
  }

  setStyle(NE) {
    NE.setProperty('display', 'inline-block');
    NE.setProperty('height', '38px');
    NE.setProperty('padding', '0 30px');
    NE.setProperty('text-align', 'center');
    NE.setProperty('font-size', '11px');
    NE.setProperty('font-weight', '600');
    NE.setProperty('line-height', '38px');
    NE.setProperty('letter-spacing', '.1rem');
    NE.setProperty('text-transform', 'uppercase');
    NE.setProperty('text-decoration', 'none');
    NE.setProperty('white-space', 'nowrap');
    NE.setProperty('background-color', 'transparent');
    NE.setProperty('border-radius', '4px');
    NE.setProperty('border', '1px solid #bbb');
    NE.setProperty('cursor', 'pointer');
    NE.setProperty('box-sizing', 'border-box');
  }

  @HostListener('mouseenter') onMouseEnter() {
    const NE = this.el.nativeElement.style;

    NE.setProperty('color', this.hoverColor);
    NE.setProperty('background-color', this.hoverbackgroundColor);
    NE.setProperty('border', `1px solid ${this.hoverborderColor}`);
    NE.setProperty('outline', '1px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.useColors(this.el.nativeElement.style);
  }

  setColors(colors: BtnColors = sColor) {
    this.Color = colors.Color;
    this.backgroundColor = colors.backgroundColor;
    this.borderColor = colors.borderColor;

    this.hoverColor = colors.hoverColor;
    this.hoverbackgroundColor = colors.hoverbackgroundColor;
    this.hoverborderColor = colors.hoverborderColor;

    this.useColors(this.el.nativeElement.style);
  }

  useColors(NE) {

    NE.setProperty('color', this.Color);
    NE.setProperty('background-color', this.backgroundColor);
    NE.setProperty('border', `1px solid ${this.borderColor}`);
    NE.setProperty('outline', 'none');
  }

}
