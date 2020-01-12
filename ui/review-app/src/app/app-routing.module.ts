import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import{ AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth-guard.service';
 

 

const routes: Routes = [
  {path:"", component: AuthComponent},
  {path:"home/:username", component:HomeComponent, canActivate:[AuthGuardService]},
  {path:"**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
