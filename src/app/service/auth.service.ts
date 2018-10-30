import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    attemptAuth(ussername: string, password: string, generateTokenUrl: string): Observable<any> {
        const credentials = { username: ussername, password: password };
        return this.http.post(generateTokenUrl, credentials);
    }

}