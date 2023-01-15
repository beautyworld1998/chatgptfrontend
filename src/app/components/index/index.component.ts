import { Component } from '@angular/core';
import { ChatHistory } from 'src/app/models/chatHistory';
import { ResponseBody } from 'src/app/models/responseBody';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  constructor(private chatService : ChatService ) { }
  //butonu disabled yap
  question : string;
  loading : boolean = false;
  answer : string;
  chatHistoryArray : ChatHistory[] = [];
  chatHistoryElement : ChatHistory = {question:"",answer:""};
  responseFromApi : ResponseBody;

  ngOnInit(): void {}

  getQuestion() {
    this.loading = true
    //console.log(this.question);
    return this.chatService.getAnswer(this.question).subscribe(response => {
      this.responseFromApi = response;
      //console.log(this.responseFromApi);
      this.loading = false;
      this.answer = this.responseFromApi.choices[0].text;
      this.collectChatHistory();
    });
  }

  collectChatHistory(){
    //console.log(this.answer);
    //console.log(this.question);
    this.chatHistoryArray.unshift({answer:this.answer,question:this.question});
  }

}