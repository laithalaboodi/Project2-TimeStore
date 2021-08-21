import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';


@Injectable({
  providedIn: 'root'
})
export class ReviewOrdersGuardGuard implements CanActivate {


  constructor(private userService:UserService, private router:Router){}
 
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      

      if(this.userService.user.id === 0){
        this.router.navigate(['/login']);
        return false;
      }
      else{
        return true;
      }

  }
  
}
