import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edition-login',
  templateUrl: './edition-login.component.html',
  styleUrls: ['./edition-login.component.scss']
})
export class EditionLoginComponent {
  email: string = '';
  password: string = '';
  loginForm: FormGroup;

  private readonly API_LOGIN = 'http://localhost:8080/users/login';

  constructor(private http: HttpClient, private router: Router, private formbuilder: FormBuilder) {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onLogin(): void {
    const loginData = { email: this.email, password: this.password };

    this.http.post(this.API_LOGIN, loginData, { responseType: 'text' }).subscribe({
      next: (response) => {

        if (response === 'Login successful') {
          this.router.navigate(['/products']);
        } else {
          console.error('Unexpected response:', response);
        }
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }
}
