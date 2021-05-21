import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from "sweetalert2"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
console.log(form)

Swal.fire({
  title: 'Good Job',
  text: 'Your subscription has been confirmed!',
  icon: 'success',

})
  }

}
