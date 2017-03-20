import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.css']
})
export class InspectionsComponent implements OnInit {
nspects: any;
properties: any;
  constructor(private firebaseService: FirebaseService) { }


  ngOnInit() {
    this.firebaseService.getNspections().subscribe(nspects => {
      this.nspects = nspects;
    });
    this.firebaseService.getProperties().subscribe(properties => {
      this.properties = properties;
    });
  }

  filterProperty(property){
    this.firebaseService.getNspections(property).subscribe(nspects => {
      this.nspects = nspects;
  });
  }
}
