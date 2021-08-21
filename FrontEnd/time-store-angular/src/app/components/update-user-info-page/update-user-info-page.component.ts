import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-update-user-info-page',
  templateUrl: './update-user-info-page.component.html',
  styleUrls: ['./update-user-info-page.component.css']
})
export class UpdateUserInfoPageComponent implements OnInit {

  id: number = 0;
  email: string = '';
  password: string = '';
  error: boolean = false;


  constructor(private userService:UserService, private router:Router, private localStorageService:LocalStorageService ) {   }

     
  onSubmit(): void{
    console.log(
      this.userService.user.id,
      this.email,
      this.password
      )
   

    this.userService.update(this.userService.user.id, this.email, this.password)    
    .subscribe(data => {
      
      
      console.log(data)
     

  },
    (error) => this.error = true);
}


  ngOnInit(): void {
  }

}
