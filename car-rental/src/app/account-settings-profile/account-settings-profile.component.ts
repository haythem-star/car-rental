import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModifyUsernameService } from '../services/modify-username.service' ;

@Component({
  selector: 'app-account-settings-profile',
  templateUrl: './account-settings-profile.component.html',
  styleUrls: ['./account-settings-profile.component.css']
})
export class AccountSettingsProfileComponent implements OnInit {
 // private username: String= '';
  constructor(private modifyUsernameService: ModifyUsernameService) { }

  ngOnInit(): void {
  }

  /*updateUser(username: string) {
    this.modifyUsernameService.setuser(username);
  } */


 /* Onkey(event:any){
    this.username= event.target.value;
  } */

  onSubmit(form: NgForm){
    const name= form.value['name'];
    this.modifyUsernameService.setuser(name);
  }


 }
