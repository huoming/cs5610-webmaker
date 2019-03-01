import {Directive, HostListener, Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHelloworld]'
})
export class HelloworldDirective {

  constructor(private el: ElementRef) { }
  @Input() bgColor: string;

  @HostListener('click') onClick() {
      this.paintBgColor(this.bgColor);
    }

  private paintBgColor(color: string) {
    this.el.nativeElement.style.background = color;
 }
}
