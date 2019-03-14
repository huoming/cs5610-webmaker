import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  baseUrl: String;

  constructor() { }

  ngOnInit() {
    // fetching baseUrl to server
    this.baseUrl = environment.baseUrl;
  }

}
