import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
// import { UsersComponent } from '../users/users.component';
// import { HeaderComponent } from '../home/header/header.component';
// import { SidebarComponent } from '../home/sidebar/sidebar.component';
// import { FooterComponent } from '../home/footer/footer.component';
// import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  declarations: []
})
export class SharedModule { }
