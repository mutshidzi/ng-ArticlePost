import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  
  points:number;
  Title:string;
  Link:string;
 
  constructor() {
    this.points=10;
    this.Title='Angular2';
    this.Link = 'https://angular8.com';
   }

  ngOnInit() {
  }

  upvote():boolean{
    this.points+=1;
    return false;
  }

  downvote():boolean{
    this.points-=1;
    return false;
  }

}
