import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { TokenStorage } from '../service/token.storage';
import { LoginUser } from './loginUser';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    constructor(private router: Router, private authService: AuthService, private token: TokenStorage) {
    }
    loginUser: LoginUser = new LoginUser();
    generateTokenUrl: string = 'http://localhost:8088/token/generate-token';

    login(): void {
        this.authService.attemptAuth(this.loginUser.username, this.loginUser.password, this.generateTokenUrl).subscribe(
            data => {
                this.token.saveToken(data.token);
                this.router.navigate(['users']);
            }
        );
    }

}