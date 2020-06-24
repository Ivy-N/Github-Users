import { Component, OnInit, Output, EventEmitter } from'@angular/core';
import { Gituser } from '../gituser';

@Component({
  selector: 'app-gituser-form',
  templateUrl: './gituser-form.component.html',
  styleUrls: ['./gituser-form.component.css']
})
export class GituserFormComponent implements OnInit {

  newGituser = new Gituser(0,"","",new Date());
@Output() addGituser = new EventEmitter<Gituser>();

  submitGituser(){
this.addGituser.emit(this.newGituser);
  }

  ngOnInit() {
  }

}
