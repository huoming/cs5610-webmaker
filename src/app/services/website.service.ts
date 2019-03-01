import { Injectable } from '@angular/core';

import {Website} from '../models/website.model.client';

@Injectable()
export class WebsiteService {

  constructor() { }

  websites: Website[] = [
    new Website("123","Facebook", "456", "facebook user 456")
  ];

  createWebsite(userId: String, website: Website){
    website.developerId = userId;
    this.websites.push(website);
  }

  findWebsitesByUser(userId) {

  }
}
