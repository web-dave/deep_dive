import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export const fromToValidator = (control: AbstractControl): ValidationErrors => {
  const group = control as FormGroup;
  const from = group.controls?.from?.value;
  const to = group.controls?.to?.value;
  if (from === to) {
    return { fromTo: 'equal' };
  }
  return {};
};
