import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component'; 
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { AuthGuardService } from './auth-guard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modal-basic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ApiService } from './api.service'
import { ReadReviewModal } from './read-review-modal'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    NgbdModalBasic,
    ReadReviewModal

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AmplifyAngularModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [AmplifyService, AuthGuardService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
