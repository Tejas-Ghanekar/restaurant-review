import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Statement } from '@angular/compiler';
import { AmplifyService } from "aws-amplify-angular"
import { Router } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  restaurants: any = [];
  constructor(private api: ApiService, private amplifyService: AmplifyService, private _router: Router) { }

  ngOnInit() {
   this.getRestaurants();
  }

  getRestaurants(){
    this.api.getRestaurant()
    .subscribe(data=>{
      for (const d of (data as any)){
        this.restaurants.push({
          id: d.id,
          name: d.name,
          address: d.address,
          price: d.price,
          city: d.city,
          state: d.state,
          postal_code: d.postal_code,
          area: d.area,
          phone: d.phone
        });
      }
      console.log(this.restaurants);
    });
  }

  logOut() {
    this.amplifyService
      .auth()
      .signOut()
      .then(() => {
        this._router.navigateByUrl("");
      })
      .catch(err => {
        return false;
      });
  }

}
