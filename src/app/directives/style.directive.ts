import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') color: string = 'red';
  @Input() dStyles: {
    border?: string,
    borderRadius?: string
    fontWeight?: string,
  };

  @HostBinding('style.color') elColor = null;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
    // elRef.nativeElement.style.color = 'green';
  }

  // @HostListener('click') onClick(event: Event)
  @HostListener('click', ['$event.target']) onClick(event: HTMLStyleElement) {
    event.style.color = 'red';
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color);
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'border',
    //   this.dStyles.border
    // );
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'borderRadius',
    //   this.dStyles.borderRadius
    // );
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'fontWeight',
    //   this.dStyles.fontWeight
    // );
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null;
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'border', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', null);
  }
}