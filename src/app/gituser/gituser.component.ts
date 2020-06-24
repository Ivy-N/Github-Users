import { Component, OnInit } from '@angular/core';
import { Gituser } from '../gituser';
import { GituserService } from '../gituser-service/gituser.service';
import { AlertService } from '../alert-service/alert.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gituser',
  templateUrl: './gituser.component.html',
  styleUrls: ['./gituser.component.css']
})

export class GituserComponent implements OnInit {

  goToUrl(id){
    this.router.navigate(['/gitusers',id])
  }

  deleteGituser(index){
    let toDelete = confirm(`Are you sure you want to delete ${this.gitusers[index].name}`)

    if (toDelete){
      this.gitusers.splice(index,1)
      this.alertService.alertMe("Github username has been deleted")
    }
  }

  {
  this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
  // Succesful API request
  this.quote = new Quote(data.author, data.quote)
},err=>{
    this.quote = new Quote("Winston Churchill","Never never give up!")
    console.log("An error occurred")
})

  gitusers:Gituser[];
  alertService:AlertService;
  quote:Quote;

  constructor(gituserService:GituserService); {
    this.gitusers = GituserService.getGitusers()
  }

  addNewGituser(Gituser){
    let gituserLength = this.gitusers.length;
    gituser.id = gituserLength+1;
    gituser.submitDate = new Date(gituser.submitDate)
    this.gitusers.push(gituser)
  }

  toggleDetails(index){
    this.gitusers[index].showRepositoryname = !this.gitusers[index].showRepositoryname;
  }

  viewedGituser(isViewed, index){
    if (isViewed) {
      this.gitusers.splice(index,1);
    }
  }


  constructor(gituserService:GituserService, alertService:AlertService, private quoteService:QuoteRequestService, private router:Router) {
    this.gitusers = gituserService.getGitusers()
    this.alertService = alertService;
  }

  ngOnInit() {

    interface ApiResponse{
      author:string;
      quote:string;
    }

    this.http.get<ApiResponse>("https://api.github.com").subscribe(data=>{
      // Succesful API request
      this.quote = new Quote(data.author, data.quote)
    })
  }

}