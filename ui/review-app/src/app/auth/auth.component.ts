import { Component, OnInit, Type } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  static NgbdModalBasic: any[] | Type<any>;
  user:any;
  constructor(private amplifyService:AmplifyService, private _router: Router) { 
    this.amplifyService = amplifyService;
    
    this.amplifyService.authStateChange$.subscribe(authState =>{
      if(authState.state === "signedIn"){
        this.user = authState.user;
        this._router.navigate(["/home",this.user.username]);

      }
      return false
    });
  }

  ngOnInit() {
  }

}
