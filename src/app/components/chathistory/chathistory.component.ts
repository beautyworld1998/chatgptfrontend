import { Component, Input } from '@angular/core';
import { ChatHistory } from 'src/app/models/chatHistory';

@Component({
  selector: 'app-chathistory',
  templateUrl: './chathistory.component.html',
  styleUrls: ['./chathistory.component.scss']
})
export class ChathistoryComponent {
  
  @Input() chatHistory : ChatHistory;
  
  constructor() {}

  ngOnInit(): void {
    console.log("child comp a gelen :",this.chatHistory);
  }


}