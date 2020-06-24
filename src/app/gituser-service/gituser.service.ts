import { Injectable } from '@angular/core';
import { Gituser } from '../gituser';

@Injectable({
  providedIn: 'root'
})
export class GituserService {

  getGitusers(){
    return Gitusers
  }

  getGoal(id){
    for (let gituser of Gitusers){
      if (gituser.id == id){
        return gituser;
      }
    }
  }

  constructor() { }
}