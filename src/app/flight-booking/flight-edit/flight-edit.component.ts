// src/app/flight-booking/flight-edit/flight-edit.component.ts

import { Component, inject, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../flight.service';
import { asyncCityValidator, fromToValidator } from './from-to.validator';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {
  service = inject(FlightService);
  fc!: FormControl;
  id = 0;
  showDetails = false;
  fb = inject(FormBuilder);
  editForm!: FormGroup;
  formConfig: { [key: string]: { type: string; validators: ValidatorFn[]; async: AsyncValidatorFn[] } } = {
    id: {
      type: 'text',
      validators: [Validators.required],
      async: []
    },
    date: {
      type: 'date',
      validators: [Validators.required],
      async: []
    },
    from: {
      type: 'text',
      validators: [Validators.required, Validators.minLength(3)],
      async: [asyncCityValidator(this.service)]
    },
    to: {
      type: 'text',
      validators: [Validators.required, Validators.minLength(3)],
      async: [asyncCityValidator(this.service)]
    }
  };
  formFields = Object.keys(this.formConfig);
  constructor(private route: ActivatedRoute) {
    this.editForm = this.fb.group({});
    this.formFields.forEach((key) => {
      const validators = this.formConfig[key].validators;
      const asyncValidators = this.formConfig[key].async;
      this.editForm.addControl(key, new FormControl('', validators, asyncValidators));
    });
    this.editForm.addValidators(fromToValidator);
    this.fc = this.editForm.controls.from as FormControl;
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.data);
    this.route.params.subscribe((p) => {
      this.id = p.id;
      this.showDetails = p.showDetails;
    });
  }
}
