import { Article } from './article.model';
import { Component, OnInit, HostBinding,Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

 @Input() article: Article;
 
  constructor() {
   
  }

  ngOnInit() {
  }

  upvote():boolean{
    this.article.points+=1;
    return false;
  }

  downvote():boolean{
    this.article.points-=1;
    return false;
  } 

}
