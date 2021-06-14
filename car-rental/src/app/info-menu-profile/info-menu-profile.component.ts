import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../services/user-information.service';
import { User } from "../shared/user.model";

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
      this.user = new User(response.user_name,response.first_name,response.last_name,response.phone,response.address,response.email,response.admin,response.rentals,response.token)   
    });
  }

}
