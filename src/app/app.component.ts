import { Component } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navLinks: any[] = [
    { path: '/weather', label: 'Weather' },
    { path: '/stocks', label: 'Stocks' }
  ];

}
