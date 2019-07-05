import { SnackbarComponent } from './../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './../shared/models/user';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  isNew: boolean;
  id: number;
  user: User;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private userService: UsersService,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.isNew = !this.id;
    if (this.isNew) {
      this.id = Math.floor(Math.random() * Math.floor(999)); // create Id

      this.userForm = this.fb.group({
        id: this.id,
        username: ['', Validators.required],
        name: ['', Validators.required],
        clockIn: '',
        clockOut: '',
        active: false
      });
    } else {
      this.getUser();
    }

  }

  getUser() {
    this.user = this.userService.getUser(this.id);
  }

  save() {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value);
      this.back();
    } else {
      const name = !this.userForm.controls.name.valid;
      const username = !this.userForm.controls.username.valid;
      console.log(name, username);
      const msg = `${username && name ? 'Username and Name are' : (username ? 'Username is' : 'Name is')} Required`;
      this.snackbar.openFromComponent(SnackbarComponent, {data: msg, duration: 3000});
    }
  }

  back() {
    this.route.navigate(['home/users']);
  }

}
