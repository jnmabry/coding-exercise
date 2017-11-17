import { Component } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { LoaderService } from './service/loader/loader.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private _loaderService: LoaderService) {
  }

  navLinks: any[] = [
    { path: '/weather', label: 'Weather' },
    { path: '/stocks', label: 'Stocks' }
  ];

}
