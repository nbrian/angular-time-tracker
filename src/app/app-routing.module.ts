import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  // { path: 'photo',
    // loadChildren: './photo-app/photo-app.module#PhotoAppModule'
  //   loadChildren: () => import('./photo-app/photo-app.module').then(mod => mod.PhotoAppModule) 
  // },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  declarations: [LoginComponent, HomeComponent],
  exports: [SharedModule, RouterModule]
})
export class AppRoutingModule { }