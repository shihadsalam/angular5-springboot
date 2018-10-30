import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../user/user';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    //private userUrl = 'http://localhost:8088/users';
    private userUrl = '/users';

    public getUsers() {
        return this.http.get<User[]>(this.userUrl);
    }

    public getUserByUsername(username) {
        return this.http.get<User>(this.userUrl + "/" + username);
    }

    public getUserNames() {
        return this.http.get<String[]>(this.userUrl+ "/get-all-usernames");
    }

    public deleteUser(user) {
        return this.http.delete(this.userUrl + "/" + user.username);
    }

    public createUser(user) {
        return this.http.post<User>(this.userUrl + "/signup", user);
    }

    public editUser(user) {
        return this.http.put<User>(this.userUrl, user);
    }

}