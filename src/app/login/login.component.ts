import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginCredential: {username: string, password: string};

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  submit() {
    console.log('login', this.loginForm.value);
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(user => console.log(user));
  }

}
