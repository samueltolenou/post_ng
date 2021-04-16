import { UsersService } from './Users.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

constructor(private userService: UsersService,private router: Router) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    

  if(this.userService.isUserConected){
    return true;

  }else{
    this.router.navigate(['/connexion']);

  }
  throw new Error('Method not implemented.');
}

}
