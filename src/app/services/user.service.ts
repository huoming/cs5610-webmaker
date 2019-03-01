import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

//import * as _ from 'lodash';


import { User } from '../models/user.model.client';

import {environment} from '../../environments/environment';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  users: User[] = [
    new User('123', 'alice', 'qq', 'alice', 'alice', 'a@a.com'),
    new User('234', 'bob', 'qq', 'bob', 'bob', 'b@b.com'),
    new User('345', 'charlie', 'qq', 'charlie','charlie','c@c.com')
  ];

  baseUrl = environment.baseUrl;

  createUser(user: User) {
    this.users.push(new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email));
  }

  findUserByCredential(username: String, password: String) {
    return this.users.find( function (user){
      return user.username === username && user.password === password;
    });
  }

/*  findUserById(userId: String) {
    return this.users.find(function(user){
      return user._id === userId;
    });
  }*/

  findUserById(userId: String) {

    console.log(this.baseUrl + 'user'+ userId );
    return this.http.get<User>(this.baseUrl +'api/user/'+ userId);
  }



  updateUser(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === user._id) {
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
        return this.users[i];
      }
    }
  }

  deleteUserById(userId: String) {
    for (const i in this.users) {
      if (this.users[i]._id === userId) {
        const j = +i;
        this.users.splice(j, 1);
      }
    }
  }
}
