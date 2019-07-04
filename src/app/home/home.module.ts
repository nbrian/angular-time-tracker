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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UsersComponent },
    { path: 'create', component: UserComponent },
    { path: ':id', component: UserComponent },
  ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule.forChild(routes)],
    declarations: [HeaderComponent, SidebarComponent, FooterComponent, UsersComponent, UserComponent],
    exports: [HeaderComponent, SidebarComponent, FooterComponent, UsersComponent, UserComponent],

})
export class HomeModule { }
