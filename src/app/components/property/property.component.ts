import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
id: any;
property: any;
imageUrl: any;

  constructor(
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getPropertyDetails(this.id).subscribe(property => {
      this.property = property;

      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(property.path);
      storageRef.child(property.path).getDownloadURL().then((url) => {
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
    });
  }

  onDeleteClick(){
    this.firebaseService.deleteProperty(this.id);

    this.router.navigate(['/properties']);
  }
}
