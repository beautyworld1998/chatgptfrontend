import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DalleComponent } from './components/dalle/dalle.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path:"",pathMatch:"full",component:IndexComponent
  },
  {
    path:"dalle",component:DalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
