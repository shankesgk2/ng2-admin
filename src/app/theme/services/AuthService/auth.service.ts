import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
  } from '@angular/router';

  @Injectable()
  export class AuthService implements CanActivate{ 
    constructor(private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
      }

      // 检查是否登录
      checkLogin(url: string): boolean {
        //   return true;
          console.log(url);

        // 重定向到 /login
        this.router.navigate(['/login']);
        return false;
      }
  }