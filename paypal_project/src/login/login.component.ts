import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup

  constructor(private fb: FormBuilder){
    this.loginForm =this.fb.group({
      username:[', Validators.required']
    })
  }

  onLogin(): void {
    if (this .loginForm.valid){
      const {username} = this.loginForm.value;
      
    }
  }

}
