import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    SignUpComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
