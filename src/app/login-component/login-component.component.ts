import { Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponent {

  username: string;
  password: string;
  loginError : boolean = false;
  //constructor(private authService: AuthService) {}
  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        const token = response.access_token;
        this.authService.setToken(token);
        localStorage.setItem("token", token);
        this.router.navigate(['/']);
      },
      error => {
        console.log('Login error:', error);
        this.loginError = true;
      }
    );
  }

}
