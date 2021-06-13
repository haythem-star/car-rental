import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import {User} from "../shared/user.model";
import { Rental } from "../shared/rental.model";


// export interface AuthResponseData {
//          user_name :string,
//         first_name :string,
//          last_name : string,
//          phone :string,
//          address : string,
//          email : string,
//          admin: boolean,
//          rentals : Rental[],
//         token : string

 
// }

@Injectable({
    providedIn : "root"
})

export class AuthService {

  user = new BehaviorSubject<User>(null);
    loggedIn = false;
   
    constructor(private http : HttpClient){}

// Utiliser pour Guard
    isAuthenticated() {
      const promise = new Promise(
        (resolve, reject) => {
          setTimeout(() => {
            resolve(this.loggedIn);
          }, 800);
        }
      );
      return promise;
    }



    
    signup(username :string , lastname :string ,firstname: string ,email: string, password: string ,phone :string ,address: string ) {
      return this.http
        .post<User>(
          'http://localhost:5000/api/user/register',
          { username: username,
            lastname: lastname,
            firstname : firstname,
            email: email,
            password: password,
            phone : phone,
            address :address
        
          }
        )
        .pipe(
          catchError(this.handleError),
          tap(resData => {
            this.handleAuthentication(
              resData.user_name,
              resData.first_name,
              resData.last_name,
              resData.phone,
              resData.address,
              resData.admin,
              resData.rentals,
              resData.email,
              resData.token
             
            );
          })
        );
    }



    login(email: string, password: string) {
      return this.http
        .post<User>(
          'http://localhost:5000/api/user/login',
          {
            email: email,
            password: password,
        
          }
        )
        .pipe(
          catchError(this.handleError),
          tap(resData => {
            this.handleAuthentication(
              resData.user_name,
              resData.first_name,
              resData.last_name,
              resData.phone,
              resData.address,
              resData.admin,
              resData.rentals,
              resData.email,
              resData.token
             
            );
          })
        );
    }



    private handleAuthentication(
      username :string,firstname: string , lastname : string , phone:string ,address :string,admin:boolean , rentals : Rental[],
      email: string,  token: string
    ) {
      const user = new User(username ,firstname, lastname,phone,address, email,admin,rentals,token );
      this.user.next(user);
      localStorage.setItem('userData', JSON.stringify(user));
    }



  
    private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }
  }