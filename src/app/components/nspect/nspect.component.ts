import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-nspect',
  templateUrl: './nspect.component.html',
  styleUrls: ['./nspect.component.css']
})
export class NspectComponent implements OnInit {
  id: any;
  nspect: any;
  imageUrl: any;


  constructor(
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getNspectionDetails(this.id).subscribe(nspect => {
      this.nspect = nspect;

      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(nspect.path);
      storageRef.child(nspect.path).getDownloadURL().then((url) => {
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
    });
  }
}
