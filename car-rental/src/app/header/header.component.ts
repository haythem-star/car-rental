import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { AuthService } from '../services/auth.service';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
  '../../assets/css/fontAwesome.css',
  '../../assets/css/hero-slider.css',
  '../../assets/css/owl-carousel.css',
  '../../assets/css/templatemo-style.css',
  "../../assets/css/lightbox.css"]
})
export class HeaderComponent implements OnInit,AfterViewInit {
 

  constructor(private dialog: MatDialog ,private AuthService :AuthService , private router : Router ) { }
  loginMode  =this.AuthService.loggedIn;
  ngOnInit(): void {
  
  }

  

  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

    signup(): void {
      const dialogRef = this.dialog.open(SignUpComponent, {
        width: '700px',
        height: '550px'
      });
  
    }

   login() : void {
    const dialogRef = this.dialog.open(SigninComponent, {
      width: '500px',
      height: '550px'
    });
  
   } 
   logout(){
     this.AuthService.logout();
     this.loginMode= false;
    
   }
profile(){
  this.router.navigate(['/profile/profileinformation']);
}
logginIn(){
  return !!localStorage.getItem('userData');
}

  }



