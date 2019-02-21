
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';


import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router) { this.errorFlag=false;}

  login () {

    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    console.log(this.username);
    console.log(this.password);

    /*if(this.password !== 'alice')
    {
      this.errorFlag=true;
    }
    else {
      this.router.navigate(['/user', '111']);
    }*/

    const user: User = this.userService.findUserByCredential(this.username, this.password);
    if (user) {
      this.router.navigate(['/user', user._id]);
    }
  }

  ngOnInit() {
  }

}
