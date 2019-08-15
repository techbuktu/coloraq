import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';

// Import App's Components to create routes for.
import {HomeComponent} from '../../components/home/home.component';
import {NewEntryComponent} from '../../components/new-entry/new-entry.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '/new',
    component: NewEntryComponent
  }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
