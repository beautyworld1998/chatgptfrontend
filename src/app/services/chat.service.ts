import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient : HttpClient) { }

  apiUrl : string = "https://localhost:7261/api/ChatGpt/test";

  getAnswer(question:string) : Observable<any> {
    let fullUrl : string = this.apiUrl + "?data=" + question;
    return this.httpClient.get(fullUrl);
  }

  

}