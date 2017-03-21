import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  properties: FirebaseListObservable<any[]>;
  property: FirebaseObjectObservable<any>;
  nspects: FirebaseListObservable<any[]>;
  nspect: FirebaseObjectObservable<any>;
  folder: any;
  folder2: any;

  constructor(private af: AngularFire) {
    this.folder = 'propertyimages';
    this.folder2 = 'nspectimages';
    this.properties = this.af.database.list('/properties') as FirebaseListObservable<Property[]>
   }

  getProperties(){
      return this.properties;
  }

  getPropertyDetails(id){
    this.property = this.af.database.object('/properties/' + id) as FirebaseObjectObservable<Property>
    return this.property;
  }

  addProperty(property){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        property.image = selectedFile.name;
        property.path = path;
        return this.properties.push(property);
      });
    }
  }

  updateProperty(id, property){
    return this.properties.update(id, property);
  }

  deleteProperty(id){
    return this.properties.remove(id);
  }


    getNspections(property:any = null){
      if(property == "0") {
        this.nspects = this.af.database.list('/nspections') as FirebaseListObservable<Nspect[]>
      }
      else if (property != null){
        this.nspects = this.af.database.list('/nspections', {
          query: {
            orderByChild: 'property_name',
            equalTo: property
          }
        }) as FirebaseListObservable<Nspect[]>
      } else {
        this.nspects = this.af.database.list('/nspections') as FirebaseListObservable<Nspect[]>
      }
        return this.nspects;
    }

    getNspectionDetails(id){
      this.nspect = this.af.database.object('/nspections/' + id) as FirebaseObjectObservable<Property>
      return this.nspect;
    }

    addNspect(newNspect){
      let storageRef = firebase.storage().ref();
      for (let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
        let path = `/${this.folder2}/${selectedFile.name}`;
        let iRef = storageRef.child(path);
        iRef.put(selectedFile).then((snapshot) => {
          newNspect.image = selectedFile.name;
          newNspect.path = path;
        return this.nspects.push(newNspect);
    });
  }
}

    updateNspect(key, updNspect){
        return this.nspects.update(key, updNspect);
    }

    deleteNspect(key){
        return this.nspects.remove(key);
    }
}


interface Property{
    $key: string;
    property_name?: string;
    image?: string;
    street_address?:string;
    city?: string;
    state?:string;
    zipcode?: string;
    mgmt_company?: string;
    cont_name?: string;
    job_title?: string;
    email?: string;
    phone?: string;
}
interface Nspect{
    $key: string;
    property_name?: any;
    section_num?: number;
    pave_seal_wear_s?: number;
    pave_seal_delam_s?:number;
    oil_spots_s?:number;
    linear_cracks_s?:number;
    gator_cracks_s?:number;
    pot_holes_s?: number;
    raveling_s?:number;
    rutting_s?: number;
    pave_seal_wear_n?: string;
    pave_seal_delam_n?:string;
    oil_spots_n?:string;
    linear_cracks_n?:string;
    gator_cracks_n?:string;
    pot_holes_n?: string;
    raveling_n?:string;
    rutting_n?: string;
}
