import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-tables',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  list = [];
  p: number = 1;

  constructor(private http: HttpService) {

  }

  ngOnInit() {
    this.http.getAllAppointments().subscribe(res => this.list = Object.values(res));
  }

  delete(i: number, id: string) {
    this.http.deleteAppointment(id).subscribe(res => this.list.splice(i, 1));
  }

  editAppt(id) {
    let form = document.getElementById('_' + id);
    let packages = form[0].value;
    let trainerpreference = form[2].checked ? form[2].value : form[1].value
    let physiotherapist = form[3].checked ? 'Yes' : 'No';
    let body = { packages, trainerpreference, physiotherapist }
    this.http.updateAppointment(id,body).subscribe( res => console.log(res))
  }
}
