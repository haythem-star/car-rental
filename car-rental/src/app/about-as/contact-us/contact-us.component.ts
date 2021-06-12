import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css',
  '../../../assets/css/fontAwesome.css',
  '../../../assets/css/hero-slider.css',
  '../../../assets/css/owl-carousel.css',
  '../../../assets/css/templatemo-style.css',
  "../../../assets/css/lightbox.css"]
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f :NgForm){
    console.log(f);
    console.log(f.value.email)

    Swal.fire({
      title: 'Thank you ',
      text: 'Your message is well received !',
      icon: 'success',
   
    })
     

  }
}
