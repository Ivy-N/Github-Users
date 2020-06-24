import { Component } from '@angular/core';
import { Gituser } from './gituser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gitusers:Gituser[] = [
    {id:1, username:'Ivy-N', repositoryname: 'myportfolio', completeDate: new Date, showRepositoryname: true},
    {id:2, username:'iantheninja', repositoryname: 'IP3', completeDate:new Date, showRepositoryname: true},
    {id:3, username:'jonnygovish', repositoryname: 'delani_studio_site', completeDate: new Date, showRepositoryname: true},
  ];
}

