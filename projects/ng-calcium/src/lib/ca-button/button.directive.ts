import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[caButton]'
})
export class ButtonDirective {

  Color: string;
  backgroundColor: string;
  borderColor: string;

  hoverColor: string;
  hoverbackgroundColor: string;
  hoverborderColor: string;

  constructor(public el: ElementRef) {
    const nElement = this.el.nativeElement;

    this.init();
    this.setStyle(nElement);
    this.useStandardColors(nElement);
  }

  init() {
    this.Color = '#555';
    this.backgroundColor = '#FFF';
    this.borderColor = '#bbb';

    this.hoverColor = '#333';
    this.hoverbackgroundColor = '#FFF';
    this.hoverborderColor = '#888';
  }

  setStyle(nElement) {
    nElement.style.setProperty('display', 'inline-block');
    nElement.style.setProperty('height', '38px');
    nElement.style.setProperty('padding', '0 30px');
    nElement.style.setProperty('text-align', 'center');
    nElement.style.setProperty('font-size', '11px');
    nElement.style.setProperty('font-weight', '600');
    nElement.style.setProperty('line-height', '38px');
    nElement.style.setProperty('letter-spacing', '.1rem');
    nElement.style.setProperty('text-transform', 'uppercase');
    nElement.style.setProperty('text-decoration', 'none');
    nElement.style.setProperty('white-space', 'nowrap');
    nElement.style.setProperty('background-color', 'transparent');
    nElement.style.setProperty('border-radius', '4px');
    nElement.style.setProperty('border', '1px solid #bbb');
    nElement.style.setProperty('cursor', 'pointer');
    nElement.style.setProperty('box-sizing', 'border-box');
  }

  @HostListener('mouseenter') onMouseEnter() {
    const nElement = this.el.nativeElement;

    nElement.style.setProperty('color', this.hoverColor);
    nElement.style.setProperty('background-color', this.hoverbackgroundColor);
    nElement.style.setProperty('border', `1px solid ${this.hoverborderColor}`);
    nElement.style.setProperty('outline', '1px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.useStandardColors(this.el.nativeElement);
  }

  useStandardColors(nElement) {

    nElement.style.setProperty('color', this.Color);
    nElement.style.setProperty('background-color', this.backgroundColor);
    nElement.style.setProperty('border', `1px solid ${this.borderColor}`);
    nElement.style.setProperty('outline', 'none');
  }

}
