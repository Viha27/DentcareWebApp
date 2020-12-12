import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../Appointment';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {


  public successMsg: string;
  public errorMsg: string;
  public appointmentDate: string;
  public name: string;
  public email: string;

  constructor(private appointmentService: AppointmentService ) { }

  ngOnInit() {
  }

  createAppointment() {

    this.successMsg = '';
    this.errorMsg = '';
    this.appointmentService.createAppointment(this.appointmentDate, this.name, this.email)
      .subscribe((createdAppointment: Appointment) => {
        this.name = '';
        this.email = '';
        this.appointmentDate = '';

        const appointmentDate = new Date(createdAppointment.appointmentDate).toDateString();
        this.successMsg = `Appointment Booked Successfully for ${appointmentDate}`;
      },
      (error: ErrorEvent) => {

        this.errorMsg = error.error.message;
      });
  }

}
