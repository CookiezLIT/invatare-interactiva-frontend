import { Component } from '@angular/core';
import { AuthService } from '../auth-service';


@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponent {

  username: string;
  password: string;
  loginError : boolean = false;
  constructor(private authService: AuthService) {}

  onSubmit() {
    console.log("AAA")
    this.authService.login(this.username, this.password).subscribe(
      response => {
        const token = response.token;
        this.authService.setToken(token);
        localStorage.setItem("token", token);
      },
      error => {
        console.log('Login error:', error);
        this.loginError = true;
      }
    );
  }

}
