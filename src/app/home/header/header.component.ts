import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name: string;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.name = this.authService.getCredentials() ? this.authService.getCredentials().name : '';
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.route.navigate(['/']);
    });
  }
}
