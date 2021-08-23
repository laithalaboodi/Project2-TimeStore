import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  error: boolean = false;


  constructor(private userService:UserService, private router:Router, private localStorageService:LocalStorageService ) {   }

    
  onSubmit(): void{
    // console.log(
    //   this.firstName,
    //   this.lastName,
    //   this.email,
    //   this.password
    //   )
   

    this.userService.signup( this.firstName, this.lastName, this.email, this.password)    
    .subscribe(data => {console.log(data)
     

this.userService.user.id = data.id
this.userService.user.email = data.email
   this.error = false;
   alert(`Welcome ${this.userService.user.email}`);
   this.router.navigateByUrl('');
  },
    (error) => this.error = true);
}

  ngOnInit(): void {
  }

}
