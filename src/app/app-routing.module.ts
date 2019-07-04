import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  declarations: [LoginComponent],
  exports: [SharedModule, RouterModule]
})
export class AppRoutingModule { }
