import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css']
})
export class EditPropertyComponent implements OnInit {
  id;
  property_name;
  image;
  street_address;
  city;
  state;
  zipcode;
  mgmt_company;
  cont_name;
  job_title;
  email;
  phone;

  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getPropertyDetails(this.id).subscribe(property => {
      this.property_name = property.property_name;
      this.street_address = property.street_address;
      this.city = property.city;
      this.state = property.state;
      this.zipcode = property.zipcode;
      this.mgmt_company = property.mgmt_company;
      this.cont_name = property.cont_name;
      this.job_title = property.job_title;
      this.email = property.email;
      this.phone = property.phone;
    });
  }

  onEditSubmit(){
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

    this.firebaseService.updateProperty(this.id, property);

    this.router.navigate(['/properties']);
  }


}
