import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';
import { AboutAsComponent} from './about-as/about-as.component';
import { AddCarComponent } from './admin/add-car/add-car.component';


const routes: Routes = [
  {path : '' , redirectTo : '/home', pathMatch : 'full'},
  {path : 'home' , component : HomeComponent},
  {path : 'categories',component: CategoriesComponent},
  {path :'about_as' , component : AboutAsComponent},
  {path :'addCar' , component : AddCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
