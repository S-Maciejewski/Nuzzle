import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { User } from '../../interfaces/authentication';
import { AuthService } from '../../services/auth.service';

const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent implements OnInit {
  errorMessage;
  loginField = '';
  passwordField = '';
  user: User;

  constructor(
    private page: Page,
    private router: RouterExtensions,
    private auth: AuthService) {
    page.actionBarHidden = true;
    this.auth.getLoginErrorMessage().subscribe(err => this.errorMessage = err);
  }

  ngOnInit() { }

  onLogin() {
    this.user = { login: this.loginField, password: this.passwordField };
    this.auth.login(this.user);

    this.router.navigate(['main'], {
      transition: {
        name: 'fade',
      },
    });
  }

  // We validate input manually, becouse Nativescript lacks good support for forms
  isFormValid() {
    return this.loginField && this.passwordField && emailRegex.test(this.loginField) && this.passwordField !== '';
  }
}
