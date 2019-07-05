import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name: string;
  constructor(
    private authService: AuthService,
    private route: Router,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.name = this.authService.getCredentials() ? this.authService.getCredentials().name : '';
  }

  logout() {
    this.snackbar.openFromComponent(SnackbarComponent, {data: 'Logging Out...', duration: 2000});
    this.authService.logout().subscribe(() => {
      this.route.navigate(['/']);
    });
  }
}
