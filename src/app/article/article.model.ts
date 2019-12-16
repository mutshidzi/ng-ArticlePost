export class Article{
    title:string;
    points:number;
    Link:string;

    constructor(title:string,Link:string,points?:number){
        this.title = title;
        this.points = points || 0;
        this.Link = Link;
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