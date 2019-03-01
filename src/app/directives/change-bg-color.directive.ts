import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appChangeBgColor]'
})
export class ChangeBgColorDirective {

  constructor(private el: ElementRef) { }

  @Input() changeBgColor: string;

  @HostListener('click') onClick() {
    this.changeMe(this.changeBgColor);
  }

  private changeMe(color: string) {
    this.el.nativeElement.style.background = color;
  }

}
