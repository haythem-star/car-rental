
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

@Injectable( { providedIn: 'root' })


export class MailService {

constructor(private http: HttpClient){};

    sendMail(email :string, name:string ,message:string) {
        this.http
          .post(
            'http://localhost:5000/mail',{'email' :email,
            'name' :name,
            'message' :message
          },{headers : new HttpHeaders().append('Content-Type','application/json')}
          )
          .subscribe(response => {
            console.log(response);
          });
      }



      // reset password 
    resetPassword(email :string ){
      this.http.post<{msg : string}>( 'http://localhost:5000/api/user/postReset',{'email' :email}
      ,{headers : new HttpHeaders().append('Content-Type','application/json')})
      .subscribe(res=>{
        Swal.fire({
          title: 'Great !!',
          text: res.msg,
          icon: 'success',
        
        })
        
      })
    }
}

