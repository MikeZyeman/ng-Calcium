import { Directive, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Directive({
  selector: '[caContainer]'
})
export class ContainerDirective {

  constructor(private el: ElementRef, private mediaMatcher: MediaMatcher) {
    const mediaQueryList = mediaMatcher.matchMedia('(min-width: 1px)');
    const style = this.el.nativeElement.style;

    console.log(mediaQueryList);
    //style.setProperty('', '')
  }

}
