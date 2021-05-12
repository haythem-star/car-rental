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
import { NotificationProfileComponent } from './notification-profile/notification-profile.component';
import { SettingProfileComponent } from './setting-profile/setting-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NavProfileComponent } from './nav-profile/nav-profile.component';
import { MenuProfileComponent } from './menu-profile/menu-profile.component';
import { GeneralProfileComponent } from './general-profile/general-profile.component' ;

const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'generale', component: GeneralProfileComponent },
  { path: 'settings', component: SettingProfileComponent },
  { path: 'notifications', component: NotificationProfileComponent },
  { path: '', component: AppComponent }
];

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
    NotificationProfileComponent,
    SettingProfileComponent,
    NavProfileComponent,
    MenuProfileComponent,
    GeneralProfileComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
