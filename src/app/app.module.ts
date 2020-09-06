import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEventsComponent } from './pages/event/list-events/list-events.component';
import { BookEventComponent } from './pages/event/book-event/book-event.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { ListFilterPipe } from './list-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListEventsComponent,
    BookEventComponent,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    Ng2FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
