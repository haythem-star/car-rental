import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service'
import { ResetPasswordComponent } from './reset-password/reset-password.component';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 password="";
 email="";
 error: string = null;
  constructor(public authService : AuthService ,private router :Router ,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  login(form : NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    
this.authService.login(email, password).subscribe(
  resData => {
    console.log(resData);
   
    this.router.navigate(['/home']);
  },
  errorMessage => {
    console.log(errorMessage);
    this.error = errorMessage;
    
  }
);

form.reset();
}

resetPass(){
  
    const dialogRef = this.dialog.open(ResetPasswordComponent, {
      width: '500px',
      height: '550px'
    });

}

}


