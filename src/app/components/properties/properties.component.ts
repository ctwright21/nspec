import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
id;
properties: any;
  constructor(private firebaseService: FirebaseService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.firebaseService.getProperties().subscribe(properties => {
      this.properties = properties;
    });
  }

  onDeleteClick(){
    this.firebaseService.deleteProperty(this.id);

    this.router.navigate(['/properties']);
  }
}
