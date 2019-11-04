import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent implements OnInit {

  debugLabel = '';
  passwordField = '';
  usernameField = '';

  constructor(
    private page: Page,
    private router: Router) {
    page.actionBarHidden = true;
  }

  ngOnInit() { }

  onLogin() {
    console.log(`login attempt: ${this.usernameField} - ${this.passwordField}`);
    this.debugLabel = `${this.usernameField} - ${this.passwordField}`;
    this.router.navigate(['main']);
  }
}
