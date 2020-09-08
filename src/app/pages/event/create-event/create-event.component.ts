import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from 'src/app/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  createEventForm: FormGroup
  constructor(private formBuilder: FormBuilder,public eventService: EventsService, public router:Router) { }

  ngOnInit() {

    this.createEventForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventDate: ['', Validators.required],
      totalSeats: ['', Validators.required],
      eventImage: ['', Validators.required]
    });
  }

  createEvent(data){
    console.log(data)
    data['totalSeats'] = eval(data['totalSeats']+'')
    this.eventService.postApi('events/createEvent',data).subscribe(res =>{
      console.log(res)
      if(res.success){
        this.createEventForm.reset()
        this.router.navigate(['/list-event']);
      }
    })
  }
}
