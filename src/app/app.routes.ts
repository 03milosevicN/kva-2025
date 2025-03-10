import { Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {SearchComponent} from '../search/search.component';
import {AirlinesComponent} from '../airlines/airlines.component';
import {DetailsComponent} from '../details/details.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "info", component: SearchComponent},
  {path: "airlines", component : AirlinesComponent},
  {path: "details/:id", component: DetailsComponent},
  //TODO: add paths
];
