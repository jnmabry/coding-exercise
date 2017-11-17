import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoaderService {

  private loader = new Subject<any>();

  constructor() { }

  show() {
    this.loader.next('show');
  }

  hide() {
    this.loader.next('hide');
  }

  getMessage(): Observable<any> {
    return this.loader.asObservable();
  }

}
