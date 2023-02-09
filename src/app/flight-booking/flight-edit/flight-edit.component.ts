// src/app/flight-booking/flight-edit/flight-edit.component.ts

import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { fromToValidator } from './from-to.validator';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {
  id = 0;
  showDetails = false;
  fb = inject(FormBuilder);
  editForm!: FormGroup;
  formConfig: { [key: string]: { type: string; validators: ValidatorFn[] } } = {
    id: {
      type: 'text',
      validators: [Validators.required]
    },
    date: {
      type: 'date',
      validators: [Validators.required]
    },
    from: {
      type: 'text',
      validators: [Validators.required, Validators.minLength(3)]
    },
    to: {
      type: 'text',
      validators: [Validators.required, Validators.minLength(3)]
    }
  };
  formFields = Object.keys(this.formConfig);
  constructor(private route: ActivatedRoute) {
    this.editForm = this.fb.group({});
    this.editForm.addValidators(fromToValidator);
    this.formFields.forEach((key) => {
      const validators = this.formConfig[key].validators;
      this.editForm.addControl(key, new FormControl('', validators, []));
    });
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.data);
    this.route.params.subscribe((p) => {
      this.id = p.id;
      this.showDetails = p.showDetails;
    });
  }
}
