import { Directive, ElementRef, EventEmitter, HostListener, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appClickWithWarning]'
})
export class ClickWithWarningDirective implements OnChanges, OnInit {
  @Output() appClickWithWarning = new EventEmitter<void>();
  constructor(private elem: ElementRef) {}

  @HostListener('mouseenter')
  over() {
    this.elem.nativeElement.setAttribute('class', 'btn btn-danger');
  }
  @HostListener('mouseleave')
  out() {
    this.elem.nativeElement.setAttribute('class', 'btn btn-info');
  }
  @HostListener('click', ['$event'])
  clicked() {
    if (confirm('Sure?')) {
      this.appClickWithWarning.emit();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.elem.nativeElement.setAttribute('class', 'btn btn-info');
  }
}
