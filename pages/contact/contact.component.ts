import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  contactForm: FormGroup;
  @ViewChild('autofocus') nameField: ElementRef;
  status: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpService) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    })
  }
  newEnqury() {
    this.http.newEnquiry(this.contactForm.value).subscribe(res => this.status = true )
  }

  ngAfterViewInit() {
    this.nameField.nativeElement.focus();
  }

}
