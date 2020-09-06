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
  bookings = []
  eventBookings = {}
  constructor(public router: Router, public eventService: EventsService) {
    this.eventService.getEventsList().subscribe(res => {
      this.events = res
    })
  }

  ngOnInit() {
    this.eventService.getApi('getAllBookings').subscribe(res => {
      if (res.success) {
        this.bookings = res.data
        this.bookings.forEach(element => {
          console.log(element)
          if (this.eventBookings[element.eventId]) {
            this.eventBookings[element.eventId] = this.eventBookings[element.eventId] + element.noOfSeats
          }
          else {
            this.eventBookings[element.eventId] = element.noOfSeats
          }
        });
        console.log(this.eventBookings)
      }
    })
  }

  book(data,availableSeats) {
    data['availableSeats'] = availableSeats
    sessionStorage.setItem('eventData',JSON.stringify(data))
    this.router.navigate(['/book-event']);
  }

}
