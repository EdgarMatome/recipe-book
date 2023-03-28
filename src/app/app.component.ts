import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(navData: string) {
    console.log(navData);
    this.loadedFeature = navData;
  }
}
