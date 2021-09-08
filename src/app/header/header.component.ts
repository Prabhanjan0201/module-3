import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  articles=[];
  error:String;
  find: String;

  constructor(private nw:NewsService) { }

  ngOnInit(): void {
    const key='';
    this.getNews()
  }

  getNews(){
    this.nw.getNewsFrom().subscribe(res=>{
      if(!res.error){
        this.articles= res.articles
      }
      else{
        this.error ="Page not found!!!";
      }
      err=>{
        this.error="Server Error"
      }
    })
  }

  searchInfo(){

  }

}
