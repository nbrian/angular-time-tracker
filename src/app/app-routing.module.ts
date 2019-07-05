import { AuthGuard } from './shared/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  // { path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule), canActivate: [ AuthGuard ]}
  { path: 'home', loadChildren: () => HomeModule, canActivate: [ AuthGuard ] }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  declarations: [LoginComponent],
  exports: [SharedModule, RouterModule]
})
export class AppRoutingModule { }
