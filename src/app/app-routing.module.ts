import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEventsComponent } from './pages/event/list-events/list-events.component';
import { BookEventComponent } from './pages/event/book-event/book-event.component';


const routes: Routes = [
  {
    path:'',
    component:ListEventsComponent
  },
  {
    path:'book-event',
    component:BookEventComponent
  },
  {
    path:'list-event',
    component:ListEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
