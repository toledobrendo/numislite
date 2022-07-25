import {AfterContentInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterContentInit {

  @Input() appAutofocus!: boolean;

  constructor(private e1: ElementRef) { }

  ngAfterContentInit(): void {
    if (this.appAutofocus) {
      setTimeout(() => {
        this.e1.nativeElement.focus();
      }, 500);
    }
  }

}
