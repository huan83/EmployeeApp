import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate, CanActivateChild {
  constructor(private router:Router, private authService: AuthserviceService ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authService.isUserLoggedIn()) {
        alert('You are not allowed to view this page. You are redirected to login Page');
        this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
        return false;
        //var urlTree = this.router.createUrlTree(['login']);
        //return urlTree;
      } 
      return true;
    }
  
    canActivateChild(route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean|UrlTree {
        if (!this.authService.isAdminUser()) {
          alert('You are not allowed to view this page');
          return false;
        }
        return true;
    }
  
}
