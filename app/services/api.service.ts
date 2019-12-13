import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Authorization } from '../interfaces/authentication';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const apiAddress = '192.168.1.22:3000';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(`${apiAddress}/login`, user, httpOptions)
      .subscribe((res: Authorization) => {
        if (res && res.success) {
          console.log('Login successful', res);
        } else {
          console.log('Login failed', res);
        }
      });
  }

}
