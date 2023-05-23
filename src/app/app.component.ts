import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-book';
  
  feature: string = 'recipe';

  featureSet(feature: string) {
    this.feature = feature;
  }
}
