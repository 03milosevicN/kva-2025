import { Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {SearchComponent} from '../search/search.component';
import {AirlinesComponent} from '../airlines/airlines.component';
import {DetailsComponent} from '../details/details.component';
import {LoginComponent} from '../login/login.component';
import {UserComponent} from '../user/user.component';
import {SignupComponent} from '../signup/signup.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "info", component: SearchComponent},
  {path: "airlines", component : AirlinesComponent},
  {path: "details/:id", component: DetailsComponent},
  {path: "details/:id/order", component: DetailsComponent},
  {path: "login", component: LoginComponent},
  {path: "user", component: UserComponent},
  {path: "signup", component: SignupComponent},
  {path: '**', redirectTo: ''},
];
