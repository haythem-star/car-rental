import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';
import { AboutAsComponent} from './about-as/about-as.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountSettingsProfileComponent } from './account-settings-profile/account-settings-profile.component';
import { SecurityProfileComponent } from './security-profile/security-profile.component';
import { HistoryProfileComponent } from './history-profile/history-profile.component';
import { InfoMenuProfileComponent } from './info-menu-profile/info-menu-profile.component';
import { NotificationProfileComponent } from './notification-profile/notification-profile.component';


const routes: Routes = [
  {path : '' , redirectTo : '/home', pathMatch : 'full'},
  {path : 'home' , component : HomeComponent},
  {path : 'categories',component: CategoriesComponent},
  {path :'about_as' , component : AboutAsComponent},
  { path: 'profile', component: ProfileComponent, children: [
    { path: 'settings', component: AccountSettingsProfileComponent },
    { path: 'security', component: SecurityProfileComponent },
    { path: 'history', component: HistoryProfileComponent },
    { path: 'profileinformation', component: InfoMenuProfileComponent },
    { path: 'notifications', component: NotificationProfileComponent }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
