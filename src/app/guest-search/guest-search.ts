import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-guest-search',
  imports: [ReactiveFormsModule],
  templateUrl: './guest-search.html',
  styleUrl: './guest-search.scss',
})
export class GuestSearch {

  private formBuilder = inject(FormBuilder);
  guestForm = this.formBuilder.group({
    name: ['', Validators.required]
  });

  onSubmit() {

  }
}