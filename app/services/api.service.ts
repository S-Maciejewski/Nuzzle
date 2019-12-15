import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiAddress } from '../environments/environment';
import { AuthService } from './auth.service';
import { StoreService } from './store.service';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private store: StoreService) {
    auth.getLoggedIn().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.httpOptions = { headers: this.httpOptions.headers.append('Authorization', store.getToken()) };
        // this.setAuthHeader(store.getToken());
      }
    });
  }

  // Some concurrency problem after logging out -> loggin in again:
  // Seems like GET /user gets to server without Authorization header somehow, which returns 500
  // Problem with ApplicationSettings storage?
  getCurrentUser() {
    console.log('AUTH HEADER:', this.httpOptions.headers.get('Authorization'));
    return this.http.get(`${apiAddress}/user`, this.httpOptions);
  }

  getOfferList() {
    return this.http.get(`${apiAddress}/offerList`, this.httpOptions);
  }

  getMyOfferList() {
    return this.http.get(`${apiAddress}/myOfferList`, this.httpOptions);
  }
}
