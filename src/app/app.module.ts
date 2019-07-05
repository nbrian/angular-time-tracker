import { environment } from './../environments/environment';
import { AuthService } from './shared/services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { UsersService } from './shared/services/users.service';
import { SnackbarComponent } from './snackbar/snackbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  entryComponents: [SnackbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
