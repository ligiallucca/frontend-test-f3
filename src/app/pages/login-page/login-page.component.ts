import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less'],
})
export class LoginPageComponent {
  userId: string;
  userPassword: string;

  constructor() {
    this.userId = '';
    this.userPassword = '';
  }
}
