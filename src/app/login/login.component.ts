import { Component, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../utils/validation';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    last: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  submitted = false;
  userLogin: boolean= false;

  constructor(private formBuilder: FormBuilder, private route: Router,private serviceAuth:AuthService) { }

  signUp() {
    this.route.navigate(['./signUp'])
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
  getValueLocal: any;


  onSubmit(): any {
    const getValueLocal = localStorage.getItem('registerValue');
    if (getValueLocal !== null && getValueLocal !== undefined) {
      try {
        const parsedValue = JSON.parse(getValueLocal);
        console.log("::: pass value", parsedValue);
        if (parsedValue.length >= 1) {
          parsedValue.map((val: any) => {

            if (val.email === this.form.value.email && val.password === this.form.value.password) {
              this.serviceAuth.updateNavbar({val:true,name:val.fullname,lName:val.last})
              this.serviceAuth.setValues(true);
              this.route.navigate(['./home']);
            } else {
              alert('Please verify your Emails or password')
            }
          })
        } else {
          if (this.form.invalid) {
            return;
          }
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    } else {
      alert('Please Register Your Details Then Sign In Your Account')
    }

  }
}
