import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/models/user';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  displayedColumns: string[] = ['id', 'name', 'clockIn', 'clockOut', 'active', 'actions'];
  dataSource;

  constructor(private userService: UsersService, private authService: AuthService, private route: Router) { }

  ngOnInit() {
    if (!this.userService.getCachedUsers()) {
      this.getUsers();
    } else {
      this.users = this.userService.getCachedUsers().filter(user => user.id !== this.authService.getCredentials().id);
      this.dataSource = new MatTableDataSource(this.users);
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users.filter(user => user.id !== this.authService.getCredentials().id);
      this.dataSource  = new MatTableDataSource(this.users);
    });
  }

  addUser() {
    this.route.navigate(['home/users/create']);
  }

  viewUser(user: User) {
    this.route.navigate([`home/users/${user.id}`]);
  }

  removeUser(index: number) {
    const data = this.dataSource.data;
    data.splice(index, 1);
    this.dataSource.data = data;
    
    this.userService.updateCachedUsers(data);
  }
}
