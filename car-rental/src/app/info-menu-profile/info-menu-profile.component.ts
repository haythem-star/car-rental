import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../services/user-information.service';
import { User } from '../models/user';

@Component({
  selector: 'app-info-menu-profile',
  templateUrl: './info-menu-profile.component.html',
  styleUrls: ['./info-menu-profile.component.css']
})
export class InfoMenuProfileComponent implements OnInit {

  user :  User ;

  constructor(private service:UserInformationService) { }

  ngOnInit() {
    this.service.getInformation().subscribe(response => {
      this.user = new User(response.username,response.email,response.password,response.firstname,response.lastname,response.address,response.admin,response.phone)   
    });
  }

}
