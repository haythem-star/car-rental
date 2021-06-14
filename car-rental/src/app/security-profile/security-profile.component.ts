import { Component, OnInit } from '@angular/core';
import { ChangePasswordService } from '../services/change-password.service';

@Component({
  selector: 'app-security-profile',
  templateUrl: './security-profile.component.html',
  styleUrls: ['./security-profile.component.css']
})
export class SecurityProfileComponent implements OnInit {
  private password: String= '';
  constructor(private changePasswordService: ChangePasswordService ) { }

  ngOnInit() {
    
  }

  updatePassword(password: string) {
    this.changePasswordService.setpwd(password);
}


  Onkey(event:any){
    this.password= event.target.value;
  }

  
}
