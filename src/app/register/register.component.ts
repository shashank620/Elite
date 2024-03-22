import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../utils/validation';
import { CommonModule } from '@angular/common';

import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  emtArr:any[]=[]
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    last: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('', [Validators.maxLength(10)]),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder,private route:Router) {}
  routeChange(){
    this.route.navigate(['./signIn'])
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        last: [
          '',
          [
            Validators.required,
          ],
        ],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): any {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }else{
      this.emtArr.push(this.form.value)
      localStorage.setItem('registerValue',JSON.stringify(this.emtArr));
      this.route.navigate(['signIn'])
    }
}
}
