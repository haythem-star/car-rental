import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {MaterialsModule} from './material.model'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ScrollDirective } from './header/scroll.directive';
import { HomeComponent } from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';
import { AboutAsComponent} from './about-as/about-as.component';
import {ProfileComponent} from './profile/profile.component';
import {SigninComponent} from './signin/signin.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { CarListComponent } from './categories/car-list/car-list.component';
import { CarComponent } from './categories/car/car.component';
import { PlaceDateComponent } from './categories/place-date/place-date.component';
import { SidenavComponent } from './categories/sidenav/sidenav.component';
import { AddCarComponent } from './admin/add-car/add-car.component';
import { HttpClientModule } from '@angular/common/http';
import { RentalFormComponent } from './rental-form/rental-form.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './about-as/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScrollDirective,
    HomeComponent,
    CategoriesComponent,
    AboutAsComponent,
    ProfileComponent,
    SigninComponent,
    SignUpComponent,
    CarListComponent,
    CarComponent,
    PlaceDateComponent,
    SidenavComponent,
    AddCarComponent,
    RentalFormComponent,
    FooterComponent,
    ContactUsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
