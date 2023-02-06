import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { DallEResponse } from '../models/dalleResponse';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient : HttpClient) { }

  apiUrl : string = "https://localhost:7261/api/OpenAI/";

  getAnswer(question: string): Observable<any> {
    let fullUrl: string = this.apiUrl + "ChatGpt?data=" + question;
    return this.httpClient.get(fullUrl);
  }

  async getAnswerPromise(question: string): Promise<any> {
    let fullUrl: string = this.apiUrl + "ChatGpt?data=" + question;
    return await lastValueFrom(this.httpClient.get(fullUrl));
  }

  async getImage(data: string): Promise<DallEResponse> {
    let fullUrl: string = this.apiUrl + "DallETypeB64?data=" + data;
    return await lastValueFrom(this.httpClient.get<DallEResponse>(fullUrl));
  }
}