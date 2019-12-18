import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { StoreService } from '../../../services/store.service';
import { AuthService } from '../../../services/auth.service';


@Component({
    selector: 'app-login-proxy',
    template: '',
    styles: [],
})
export class LoginProxyComponent implements OnInit {

    constructor(
        private page: Page,
        private router: RouterExtensions,
        private store: StoreService,
        private auth: AuthService) {
        page.actionBarHidden = true;
        if (store.getToken()) {
            auth.setLoggedIn(true);
            router.navigateByUrl('/appointments');
        } else {
            auth.setLoggedIn(false);
            router.navigateByUrl('/login');
        }
    }

    ngOnInit() { }

}
