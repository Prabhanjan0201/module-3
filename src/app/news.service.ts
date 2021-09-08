import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http:HttpClient) {}

  getNewsFrom(){
    return this.http.get<any>('https://newsapi.org/v2/everything?q=india&from=2021-08-08&sortBy=publishedAt&apiKey=34ce3d47032d4b7eab921e0ffa9b03a6')
  }
}
