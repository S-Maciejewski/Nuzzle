import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { StoreService } from '../../../services/store.service';


@Component({
    selector: 'app-login-proxy',
    template: '<Label text="Login proxy works"></Label>',
    styles: [],
})
export class LoginProxyComponent implements OnInit {

    debugLabel = '';
    passwordField = '';
    usernameField = '';

    constructor(
        private page: Page,
        private router: RouterExtensions,
        private store: StoreService) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
        console.log('login proxy working!');
    }

}
