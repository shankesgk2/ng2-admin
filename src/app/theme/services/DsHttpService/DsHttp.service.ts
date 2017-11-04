import { Injectable } from '@angular/core';
import { Headers, Http, BaseRequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt/angular2-jwt';

@Injectable()
export class DsHttp {
    constructor(private baseurl: string) { };
    DsHttp() {

    }
}