
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

    //testing api call -- remove me when done
    /*this.userService.findUserById('123')
      .subscribe(data => {
        console.log('in login comp...');
        console.log(data);
      });*/

    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    const user: User = this.userService.findUserByCredential(this.username, this.password);

    if (user) {
      this.router.navigate(['/user', user._id]);
    }
  }

  ngOnInit() {
  }

}
