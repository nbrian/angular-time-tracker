import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginCredential: {username: string, password: string};

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  submit() {
    console.log('login', this.loginForm.value);
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(user => {
      this.authService.updateCredentials(user);
      console.log('user', user);
      this.route.navigate(['/home']);
    });
  }

}
