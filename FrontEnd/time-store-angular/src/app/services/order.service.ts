import { Injectable } from '@angular/core';

import { Observable, throwError, Subject } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import { Order } from 'src/app/Order';
import { Watch } from '../Watch';

import { PurchsedOrder} from '../PurchasedOrders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient,) { }

  //orders hold array of watches were bought
  orders:PurchsedOrder[] = [];
  subject: Subject<PurchsedOrder[]> = new Subject< PurchsedOrder[]>();


  addOrder( order:Order ): void{
   

    let headers = new HttpHeaders();
  
    headers = headers.set('Content-Type', 'application/json');


//console.log(JSON.stringify(order))
    

    this.http.post('http://ec2-18-223-255-99.us-east-2.compute.amazonaws.com:8080/orders/createorder',JSON.stringify({ "buyerid":order.buyerid,  "watchid": order.watchid })    ,  { headers } )
    .pipe(
      catchError((e)=>{
        console.log(e)
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
    this.http.post<PurchsedOrder[]>('http://ec2-18-223-255-99.us-east-2.compute.amazonaws.com:8080/buyer/reviewOrders',   JSON.stringify( { "buyerid": buyerId})   , options )
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
