import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less'],
})
export class LoginPageComponent {
  userId: string;
  userPassword: string;

  constructor(private router: Router) {
    this.userId = '';
    this.userPassword = '';
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
