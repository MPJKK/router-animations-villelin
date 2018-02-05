import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Login} from '../models/login';

@Injectable()
export class MediaService {

  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(private http: HttpClient, private router: Router) {
  }

  getAllMedia() {
    return this.http.get(this.apiUrl + '/media');
  }

  newUser(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }

  loginUser(user) {
    return this.http.post<Login>(this.apiUrl + '/login', user).
        subscribe((response) => {
          // Toimii: etusivulle
          localStorage.setItem('token', response.token);
          this.router.navigate(['front']);
        }, (error: HttpErrorResponse) => {
          // Virhe: loginiin
          this.router.navigate(['login']);
        });
  }

  getUserData(token) {
    const options = {
      headers: new HttpHeaders().set('x-access-token', token)
    };
    return this.http.get(this.apiUrl + '/users/user', options);
  }

  upload(form: FormData, token) {
    const options = {
      headers: new HttpHeaders().set('x-access-token', token)
    };
    return this.http.post(this.apiUrl + '/media', form, options);
  }
}
