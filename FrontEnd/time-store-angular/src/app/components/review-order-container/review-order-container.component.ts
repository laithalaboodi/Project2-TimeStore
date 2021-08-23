import { Component, OnInit } from '@angular/core';


import { OrderService } from 'src/app/services/order.service';

import { UserService } from 'src/app/services/user.service'; 
import { Observable } from 'rxjs';


import { PurchsedOrder } from 'src/app/PurchasedOrders';

@Component({
  selector: 'app-review-order-container',
  templateUrl: './review-order-container.component.html',
  styleUrls: ['./review-order-container.component.css']
})
export class ReviewOrderContainerComponent implements OnInit {

 
 orders: Observable<PurchsedOrder[]> = new Observable<PurchsedOrder[]>();
 
 
 
 
 
  constructor( private OrderService:OrderService, private userService:UserService ) { }


  ngOnInit(): void {

console.log("i will call order service to get past orders")
//add rout gaurd too for this component
//login check too 


// call order service to get past orders

this.OrderService.reviewOrders(this.userService.user.id);
this.orders = this.OrderService.subject;


  }

}
