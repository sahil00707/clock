import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable,BehaviorSubject } from 'rxjs';
import { MyserviceService } from './services/myservice.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MyguardGuard implements CanActivate {
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getData.log();
  }
  constructor(private getData:MyserviceService,private router:Router){

  }
  
}
