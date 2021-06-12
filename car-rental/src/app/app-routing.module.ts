import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';
import { AboutAsComponent} from './about-as/about-as.component';
import { AddCarComponent } from './admin/add-car/add-car.component';
import { RentalFormComponent } from './rental-form/rental-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {AuthGuard} from './services/auth.guard.service'



const routes: Routes = [
  {path : '' , redirectTo : '/home', pathMatch : 'full'},
  {path : 'home' , component : HomeComponent},
  {path : 'categories',component: CategoriesComponent},
  {path :'rental/:id' , component :RentalFormComponent},
  {path : 'signUp' , component : SignUpComponent},
  {path :'about_as' , component : AboutAsComponent},
  {path :'addCar' , component : AddCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
