import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Angular Guy';

  addArticle(Title:HTMLInputElement,Link:HTMLInputElement):boolean{
    console.log(`Adding Article title ${Title.value} and link: ${Link.value}`);
    return false;
  }
}
