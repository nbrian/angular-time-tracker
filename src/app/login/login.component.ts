import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { AuthService } from './../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginCredential: {username: string, password: string};

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  submit() {
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(user => {
      this.authService.updateCredentials(user);
      this.route.navigate(['home']);
    }, error => {
      this.openSnackBar(error.error.error.msg);
    });
  }

  openSnackBar(message) {
    this.snackBar.openFromComponent(SnackbarComponent, {announcementMessage: message, data: message, duration: 3000});
  }

}
