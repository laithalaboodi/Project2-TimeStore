
import { Watch } from 'src/app/Watch';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Order } from 'src/app/Order';
import { OrderService } from 'src/app/services/order.service';

import { UserService } from 'src/app/services/user.service'; 

import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {






@Input() watch:Watch = { 
  watchid:0,
  brand: "",
  price:0,
  discription: "",
  picName:""
};

userId:number = 0 ;



performOnbuy():void {
  // const idJson =  this.localStorageService.getItem('id');
  //  const userId = idJson !== null ? JSON.parse(idJson) : 0;

  
  if (this.userService.user.id != 0 ){
    this.userId= this.userService.user.id;


  }
  if ( this.userId== 0){

    alert('Please login to buy a watch');
    return;
  }
  
  const order:Order = {
    buyerid: this.userId , 
      
    watchid : this.watch.watchid
  }
 
  this.OrderService.addOrder(order);
  console.log('button work')
 }

  constructor( private localStorageService:LocalStorageService,  private OrderService:OrderService, private userService:UserService) { }

  ngOnInit(): void {
  }

}
