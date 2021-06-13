import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
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
 loginMode  =this.AuthService.loggedIn;

  constructor(private dialog: MatDialog ,private AuthService :AuthService) { }

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
   login() : void {
    const dialogRef = this.dialog.open(SigninComponent, {
      width: '500px',
      height: '550px'
    });

   } 
   logout(){
     this.AuthService.logout();
   }
  }



