import { Injectable } from '@angular/core';
import { Gituser } from '../gituser';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertMe(message:string){
    alert(message)
  }

  constructor() { }
}