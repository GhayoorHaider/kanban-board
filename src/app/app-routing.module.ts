import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoardPageComponent } from './boards/board-page/board-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    data: {
        title: 'Kanban Board! | Home'
    }
  },
  { 
    path: 'board/:id', 
    component: BoardPageComponent,
    data: {
        title: 'Kanban Board! | Board details'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
