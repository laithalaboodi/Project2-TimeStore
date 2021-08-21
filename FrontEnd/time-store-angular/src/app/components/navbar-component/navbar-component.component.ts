import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {


  classText:String= "login_btn";
  // cButton: String  = "login_btn";
  loginText: String = "Login";
  signupText: String = "SignUp";

  

username:String =  this.userService.user.email? this.userService.user.email: "Guest";


  updateText: String = "Update User Info";

  reviewOrderText:String ="Review Orders";

  LogoutText:String = " LogOut"


  directTologinpage():void{

this.router.navigateByUrl('/login');

  }

  directUpdatePage():void{

    this.router.navigateByUrl('/update');
    
      }

  directToRegisterPage():void{

    this.router.navigateByUrl('/signup');
    
      }



      directToReviewPage():void{


 this.router.navigateByUrl('/reviewOrders');

      }

      directToHomePageAfterLogOut():void{

        this.userService.user.id = 0;

        let win = (window as any);
        win.location.reload();

      }

  constructor(private router:Router, private userService:UserService, ) { }

  ngOnInit( ): void {
  }

}


