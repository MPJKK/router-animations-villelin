import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {HttpErrorResponse} from '@angular/common/http';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User('', '', '', '');

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.user);
    this.mediaService.loginUser(this.user).subscribe((response) => {
      console.log(response);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
}
