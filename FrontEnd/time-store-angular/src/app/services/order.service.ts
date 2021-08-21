import { Injectable } from '@angular/core';

import { Observable, throwError, Subject } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import { Order } from 'src/app/Order';
import { Watch } from '../Watch';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient,) { }

  //orders hold array of watches were bought
  orders: Watch[] = [];
  subject: Subject< Watch[]> = new Subject< Watch[]>();


  addOrder(order: Order): void{
   

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
       });
  
      let options = { headers: headers };



    

    this.http.post('http://localhost:3000/orders', JSON.stringify(order),  options )
    .pipe(
      catchError((e)=>{
        return throwError(e);
      }))
      .subscribe(
        (data) => {
          console.log(data);
         alert('Request Sucessful');
        }
      )






    
  }









  reviewOrders(buyerId:Number): void{
   

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
       });
  
      let options = { headers: headers };



    

    // this.http.post<Watch[]>('http://localhost:3000/orders', JSON.stringify({"buyerId": buyerId}),  options )
    // .pipe(
    //   catchError((e)=>{
    //     return throwError(e);
    //   }))
    //   .subscribe(
    //     (data) => {
    //       this.orders = data;
    //       console.log(data)

    //       this.subject.next(this.orders);
    //      alert('Request Sucessful');
    //     }
    //   )

//===========for my test server
    this.http.get<Watch[]>('http://localhost:3000/watches',  options )
    .pipe(
      catchError((e)=>{
        return throwError(e);
      }))
      .subscribe(
        (data) => {
          this.orders = data;
     
          // console.log(data)
          this.subject.next(this.orders);
        // alert('Request Sucessful');
        }
      )


    
  }









}
