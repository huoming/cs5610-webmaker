import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web-Maker';

  // testing first directive
  color = 'yellow';


  reorderItems(indexes) {
    console.log("start: " + indexes.startIndex);
    console.log("stop: " + indexes.endIndex);
  }

}
