import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DalleComponent } from './dalle.component';
import { RouterModule } from '@angular/router';
import { ChathistoryComponent } from '../chathistory/chathistory.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DalleComponent,
    ChathistoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: "", component: DalleComponent }
    ])
  ],
  exports: [
    ChathistoryComponent
  ]
})
export class DalleModule { }
