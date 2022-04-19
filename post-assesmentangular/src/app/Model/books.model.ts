export class Books {
    id:number;
    title:string;
    catag:string;
    author:string;
    year:string;
    date:string;
    url:string;
    Available:string
    constructor(id:number,title:string,catag:string,author:string,year:string,date:string,url:string,Available:string)
    {
        this.id=id;
        this.title=title;
        this.catag=catag;
        this.author=author;
        this.year=year;
        this.date=date;
        this.url=url;
        this.Available=Available;
    }
 }
 export interface users{
     id:number;
     name:string;
     OrderCount:number


 }