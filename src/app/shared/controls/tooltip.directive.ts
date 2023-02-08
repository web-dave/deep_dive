import { Directive, EmbeddedViewRef, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ManfriedComponent } from './manfried/manfried.component';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {
  @Input('appTooltip') template: TemplateRef<unknown> | undefined;
  viewRef: EmbeddedViewRef<unknown> | undefined;
  constructor(private container: ViewContainerRef) {}

  ngOnInit(): void {
    if (this.template) {
      // this.viewRef = this.container.createEmbeddedView(this.template, {
      //   $implicit: 'Provizial',
      //   hint: 'ödkvjfdaöh'
      // });
      // this.viewRef.rootNodes.forEach((node) => (node.hidden = true));

      this.container.createComponent(ManfriedComponent);
    }
  }

  @HostListener('mouseenter')
  da() {
    if (this.template && this.viewRef) {
      this.viewRef.rootNodes.forEach((node) => (node.hidden = false));
    }
  }
  @HostListener('mouseleave')
  wech() {
    if (this.template && this.viewRef) {
      this.viewRef.rootNodes.forEach((node) => (node.hidden = true));
    }
  }
}
