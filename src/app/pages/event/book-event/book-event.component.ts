import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/events.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.scss']
})
export class BookEventComponent implements OnInit {

  bookEventForm: FormGroup
  eventId: '';
  eventDetails = {}
  modalRef: BsModalRef;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, public router: Router,
    public eventService: EventsService, private modalService: BsModalService) { }

  ngOnInit() {

    this.eventDetails = JSON.parse(sessionStorage.getItem('eventData'))


    this.bookEventForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\ \s]+$/)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      noOfSeats: ['', Validators.required],
      otherAttendees: new FormArray([])
    });

  }

  get f() { return this.bookEventForm.controls; }
  get t() { return this.f.otherAttendees as FormArray; }

  //To know the selected seats
  noOfSeats(data) {
    console.log(data)
    this.t.controls = []
    for (let i = 1; i < data; i++) {
      this.t.push(this.formBuilder.group({
        name: [''],
      }));
    }

  }

  //form validation
  enableFromValidation(form) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true });
    })
  }

  //calling post API for submitting the values
  submit(success, error) {
    this.bookEventForm.value['eventId'] = this.eventDetails['_id']
    console.log(this.bookEventForm.value)
    if (!this.bookEventForm.valid) {
      this.enableFromValidation(this.bookEventForm)
      this.openModal(error)
      return;
    }
    this.eventService.postApi('booking/book-event', this.bookEventForm.value).subscribe(res => {

      if (res.success) {
        this.openModal(success)
        this.router.navigate(['/list-event']);

      } else {
        this.openModal(error)
      }
    })
  }

  //Template to display success or error messages
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
