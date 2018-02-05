import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {HttpErrorResponse} from '@angular/common/http';
import {MediaService} from '../services/media.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User('', '', '', '');

  constructor(private mediaService: MediaService, private router: Router) { }

  ngOnInit() {
    const tok = localStorage.getItem('token');
    this.mediaService.getUserData(tok).subscribe((response) => {
      this.router.navigate(['front']);
    });
  }

  login() {
    console.log(this.user);
    this.mediaService.loginUser(this.user);
  }
}
