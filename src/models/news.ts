
export class NewsModel{
    newstitle : String;
    newsimage : String;
    newslink : String;
    newscomments: String;

   constructor(newstitle: String,newsimage: String,  newslink: String, newscomments: String){

    this.newstitle = newstitle;
    this.newsimage = newsimage;
    this.newslink = newslink;
    this.newscomments = newscomments;
   }



}