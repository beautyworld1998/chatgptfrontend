import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { DalleModule } from '../dalle/dalle.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    DalleModule,
    FormsModule
  ]
})
export class IndexModule { }
