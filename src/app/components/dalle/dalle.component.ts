import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-dalle',
  templateUrl: './dalle.component.html',
  styleUrls: ['./dalle.component.scss']
})
export class DalleComponent {

  imageSentence: string;
  loading: boolean = false;
  imageUrl: string = "";

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {}


  createImage() {
    this.loading = true;
    this.chatService.getImage(this.imageSentence).then(response => {
      this.loading = false;
      console.log("responsedan gelene : ",response.results);
      this.imageUrl += "data:image/jpeg;base64, " + response.results;
      console.log("img url : ", this.imageUrl);
    }); 
  }


}