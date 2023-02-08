import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-f',
  template: `<input #me [value]="val" (input)="value = me.value" />`,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DateFComponent), multi: true }]
})
export class DateFComponent implements ControlValueAccessor {
  val: any = '';

  set value(val: any) {
    if (val !== undefined && val !== this.val) {
      console.log('===>', val);
      this.val = val;
      this.onChange(val);
      this.onTouched(val);
    }
  }

  onChange: any = () => {};
  onTouched: any = () => {};
  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
