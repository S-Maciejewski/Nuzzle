import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Authorization } from '../interfaces/authentication';
import { apiAddress } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { StoreService } from './store.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginErrorMessage: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(undefined);

  constructor(
    private http: HttpClient,
    private store: StoreService) { }

  login(user: User) {
    return this.http.post(`${apiAddress}/login`, user, httpOptions)
      .subscribe((res: Authorization) => {
        if (res && res.success) {
          this.loginErrorMessage.next(undefined);
          this.loggedIn.next(true);
          this.store.setToken(res.message);
        } else {
          this.loginErrorMessage.next(res.message);
        }
      });
  }

  logout() {
    this.loggedIn.next(false);
    this.store.removeToken();
  }

  getLoginErrorMessage() {
    return this.loginErrorMessage;
  }

  getLoggedIn() {
    return this.loggedIn;
  }

  setLoggedIn(isLoggedIn: boolean) {
    this.loggedIn.next(isLoggedIn);
  }
}
