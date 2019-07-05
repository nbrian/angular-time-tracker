import { HomeComponent } from './home.component';
import { AuthGuard } from './../shared/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { HeaderComponent } from '../home/header/header.component';
import { SidebarComponent } from '../home/sidebar/sidebar.component';
import { FooterComponent } from '../home/footer/footer.component';
import { UserComponent } from '../user/user.component';
import { MaterialModule } from '../shared/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: '', component: HomeComponent, children: [
        { path: '', redirectTo: 'users', pathMatch: 'full' },
        { path: 'users', component: UsersComponent},
        { path: 'users/create', component: UserComponent},
        { path: 'users/:id', component: UserComponent}
    ]},
  ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule.forChild(routes)
    ],
    declarations: [HomeComponent, HeaderComponent, SidebarComponent, FooterComponent, UsersComponent, UserComponent],
    exports: [HomeComponent, HeaderComponent, SidebarComponent, FooterComponent, UsersComponent, UserComponent],
})
export class HomeModule { }
