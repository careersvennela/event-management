import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/events.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {

  events = []

  constructor(public router: Router, public eventService: EventsService) {
  }

  ngOnInit() {
    //To get the events list using Node JS API
    this.eventService.getApi('events/getAllEvents').subscribe(res => {
      if (res.success) {
        this.events = res.finalEvents
        console.log(this.events)
      }
    })

  }

  book(data,availableSeats) {
    data['availableSeats'] = availableSeats
    sessionStorage.setItem('eventData',JSON.stringify(data))
    this.router.navigate(['/book-event']);
  }

}
