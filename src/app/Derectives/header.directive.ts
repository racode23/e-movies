import { Directive } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {

  constructor(private el:Element) { 

    //this.el.nativeElement.style.backgroundColor='yellow'
  }

}
