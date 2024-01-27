import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  message = 'Welcome';
  type = 'register';
  showEmailError = false;
  

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      name: [null,Validators.required],
      email: [null, [Validators.required, Validators.email],],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)
        ],
      ],
      confirmPassword: [null, [Validators.required]]
    }, { validator: this.passwordMatchValidator })
  }

   passwordMatchValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

  typeChange(type: string){
    for (let value in this.loginForm.value) {
      this.loginForm.value[value] = null;
    }
    console.log('type change:',this.loginForm);
    this.type = type;
    if(type === 'login') this.message = 'Welcome Back';
  }

  onInput(id: any) {
    const control = this.loginForm.get(id);
    const input = document.getElementById(id);

    if (control && input && id !== 'confirmPassword') {
      if (control.invalid) input.classList.add('invalid-border');
      else input.classList.add('valid-border');
    }

    if (id === 'confirmPassword' && input) {
      if (this.loginForm.hasError('passwordMismatch')) input.classList.add('invalid-border');
      else input.classList.add('valid-border');
    }
  }

  formSubmit() {
    if (this.loginForm.status === 'VALID') {
      console.log('>>>>>>.',this.loginForm.value);
      this.router.navigate(['landing']);
    }
  }

  data = [
    {
      category: 'fruits',
      id: 1,
      name: 'Apple'
    },
    {
      category: 'Automobile',
      id: 3,
      name: 'Lorry'
    },
    {
      category: 'fruits',
      id: 2,
      name: 'Orange'
    },
    {
      category: 'Automobile',
      id: 1,
      name: 'Car'
    },
    {
      category: 'Vegitables',
      id: 1,
      name: 'Onion'
    },
    {
      category: 'other',
      id: 1,
      name: 'Ball'
    },
    {
      category: 'Automobile',
      id: 2,
      name: 'Bus'
    }
  ]

  sortData() {
    this.data.sort((a: any, b: any) => {
      if (a.gtin < b.gtin) return -1;
      if (a.gtin > b.gtin) return 1;
      return a.digitalAssetFacingPharmaceutical - b.digitalAssetFacingPharmaceutical;
    });

    console.log('data:',this.data)
  }

}
