import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  isNew: boolean;
  constructor(private fb: FormBuilder, private route: Router, private userService: UsersService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      id: Math.random(),
      username: ['', Validators.required],
      name: ['', Validators.required],
      clockIn: '',
      clockOut: '',
      active: false
    });
  }

  save() {
    this.userService.addUser(this.userForm.value);
    this.back();
  }

  back() {
    this.route.navigate(['/home/users']);
  }

}
