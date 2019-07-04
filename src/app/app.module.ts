import { environment } from './../environments/environment';
import { AuthService } from './shared/services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    { provide: 'BASE_API_URL', useValue: environment.apiUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
