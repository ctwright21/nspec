import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {
properties: any;
property: any;
nspect: any;
image: any;

property_name: any;

completed_by: string;
nspect_date:any;
section_num: number;
pave_seal_wear_s: number;
pave_seal_delam_s: number;
oil_spots_s:number;
linear_cracks_s: number;
gator_cracks_s: number;
pot_holes_s: number;
raveling_s: number;
rutting_s: number;
pave_seal_wear_n: string;
pave_seal_delam_n: string;
oil_spots_n: string;
linear_cracks_n: string;
gator_cracks_n: string;
pot_holes_n: string;
raveling_n: string;
rutting_n: string;

  constructor(
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {

    this.firebaseService.getProperties().subscribe(properties => {
    this.properties = properties;
    });

    this.firebaseService.getNspections().subscribe(nspect => {
    this.nspect = nspect;
    });
  }

    onAddSubmit() {
    let newNspect = {
      completed_by: this.completed_by,
      nspect_date: this.nspect_date,
      property_name: this.property_name,
      section_num: this.section_num,
      pave_seal_wear_s: this.pave_seal_wear_s,
      pave_seal_delam_s: this.pave_seal_delam_s,
      oil_spots_s: this.oil_spots_s,
      linear_cracks_s: this.linear_cracks_s,
      gator_cracks_s: this.gator_cracks_s,
      pot_holes_s: this.pot_holes_s,
      raveling_s: this.raveling_s,
      rutting_s: this.rutting_s,
      pave_seal_wear_n: this.pave_seal_wear_n,
      pave_seal_delam_n: this.pave_seal_delam_n,
      oil_spots_n: this.oil_spots_n,
      linear_cracks_n: this.linear_cracks_n,
      gator_cracks_n: this.gator_cracks_n,
      pot_holes_n: this.pot_holes_n,
      raveling_n: this.raveling_n,
      rutting_n: this.rutting_n
    }

    this.firebaseService.addNspect(newNspect);

    this.router.navigate(['inspections']);
  }

}
