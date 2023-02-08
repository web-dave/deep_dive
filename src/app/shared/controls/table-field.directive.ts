import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTableField]'
})
export class TableFieldDirective {
  @Input('appTableFieldAs') property = '';

  constructor(public template: TemplateRef<unknown>) {}
}
