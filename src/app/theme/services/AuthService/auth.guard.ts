import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (this.islogin()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

    // 检查是否登录
    private islogin(url?: string): boolean {
        return isTokenExpired();
    }
}