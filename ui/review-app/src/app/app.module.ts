import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component'; 
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AmplifyAngularModule
  ],
  providers: [AmplifyService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
