import { Article } from './article/article.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Angular Guy';
  articles:Article[];

  constructor(){
    this.articles = [
      new Article("T1","https://t1.com",0),
      new Article("T2","https://t2.com",20),
      new Article("T3","https://t3.com",10),
    ]
  }

  addArticle(Title:HTMLInputElement,Link:HTMLInputElement):boolean{
    console.log(`Adding Article title ${Title.value} and link: ${Link.value}`);
    this.articles.push(new Article(Title.value,Link.value,0));
    Title.value ='';
    Link.value = '';

    return false;
  }
}
