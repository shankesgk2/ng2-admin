import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private jwtHelper:JwtHelperService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.islogin()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

    // 检查是否登录
    private islogin(url?: string): boolean {
        const token = this.jwtHelper.tokenGetter();
        if (token != null){
            console.error(token);
            return !this.jwtHelper.isTokenExpired(token);
        } else {
            return false;
        }
        // let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vd3d3LmRzLmNvbS9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE1MDg0ODI2MTgsImV4cCI6MTUwODQ4NjIxOCwibmJmIjoxNTA4NDgyNjE4LCJqdGkiOiIxNzdOMmhHN3NadEFoWjhVIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.AecJYDsZAeeYYNbI8pMnZWtotnsfpI41XfvRTcAe2vo';
        // return !this.jwtHelper.isTokenExpired(token);
    }
}