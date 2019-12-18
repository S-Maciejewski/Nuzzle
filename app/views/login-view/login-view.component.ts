import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { UserLogin } from '../../interfaces/authentication';
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
  userLogin: UserLogin;

  constructor(
    private page: Page,
    private router: RouterExtensions,
    private auth: AuthService) {
    page.actionBarHidden = true;
    this.auth.getLoginErrorMessage().subscribe(err => this.errorMessage = err);
    this.auth.getLoggedIn().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['appointments'], {
          transition: {
            name: 'fade',
          },
        });
      }
    });
  }

  ngOnInit() { }

  onLogin() {
    this.userLogin = { login: this.loginField, password: this.passwordField };
    this.auth.login(this.userLogin);
  }

  // We validate input manually, becouse Nativescript lacks good support for forms
  isFormValid() {
    return this.loginField && this.passwordField && emailRegex.test(this.loginField) && this.passwordField !== '';
  }
}
