import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public waitListClick$: Subject<void> = new Subject<void>();

  constructor() { }
}
