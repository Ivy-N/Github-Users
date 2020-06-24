import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gituser } from '../gituser';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { GituserService } from '../gituser-service/gituser.service';

@Component({
  selector: 'app-gituser-detail',
  templateUrl: './gituser-detail.component.html',
  styleUrls: ['./gituser-detail.component.css']
})
export class GituserDetailComponent implements OnInit {

  gituser:Gituser;
  @Output() isViewed = new EventEmitter<boolean>();

  gituserViewed(viewed:boolean){
    this.isViewed.emit(viewed);
  }

  gituserDelete(complete:boolean){
    this.isViewed.emit(complete);
  }

  constructor(private route:ActivatedRoute, private service:GituserService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.gituser = this.service.getGitusers()
  }

}