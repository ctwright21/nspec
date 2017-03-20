import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  property_name: any;
  image: any;
  street_address: any;
  city: any;
  state: any;
  zipcode: any;
  mgmt_company: any;
  cont_name: any;
  job_title: any;
  email: any;
  phone: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let property = {
      property_name: this.property_name,
      street_address: this.street_address,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      mgmt_company: this.mgmt_company,
      cont_name: this.cont_name,
      job_title: this.job_title,
      email: this.email,
      phone: this.phone
    }

    this.firebaseService.addProperty(property);

    this.router.navigate(['properties']);
  }
}
