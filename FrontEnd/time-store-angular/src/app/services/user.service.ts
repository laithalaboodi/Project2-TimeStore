import { Injectable } from '@angular/core';
import { User } from '../User';
import {HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';

import {catchError, last, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  subject: Subject<User[]> = new Subject<User[]>();


  user:User = {
    id:0,
    firstName: "",
    lastName: "",
    email: "",
    password:""
  }

  login( email:string, password:string) : Observable<any>{

    let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');
    return this.http.post<any>("http://ec2-18-223-255-99.us-east-2.compute.amazonaws.com:8080/buyer/login", JSON.stringify({ "email":email,  "pass":password}) ,{headers}  )
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
 
  }


  signup(firstName:string, lastName:string, email:string, password:string) : Observable<any>{
    console.log( firstName, lastName, email, password)
    let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');
    return this.http.post<any>("http://ec2-18-223-255-99.us-east-2.compute.amazonaws.com:8080/buyer/register", JSON.stringify({"first":firstName, "last":lastName, "email":email, "pass" :password}) ,{headers}  )
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
 
  }

  update(id:Number, email:string, password:string) : Observable<any>{
    console.log(id, email, password)
    let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');
    return this.http.post<any>("http://ec2-18-223-255-99.us-east-2.compute.amazonaws.com:8080/buyer/update", JSON.stringify({ "buyerid" :  id,"newemail" :email, "newpass": password}) ,{headers}  )
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
 
  }

 



  constructor(private http: HttpClient) { }


}
