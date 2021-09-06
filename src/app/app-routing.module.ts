import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HeroeListComponent} from "./components/heroe-list/heroe-list.component";
import {HeroeDetailsComponent} from "./components/heroe-details/heroe-details.component";
import {AddHeroeComponent} from "./components/add-heroe/add-heroe.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'heroes', pathMatch: 'full'
  },
  {
    path: 'heroes', component: HeroeListComponent
  },
  {
    path: 'heroes/:id', component: HeroeDetailsComponent
  },
  {
    path: 'add', component: AddHeroeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
