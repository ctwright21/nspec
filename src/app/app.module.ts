import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { EditPropertyComponent } from './components/edit-property/edit-property.component';
import { PropertyComponent } from './components/property/property.component';
import { InspectComponent } from './components/inspect/inspect.component';
import { InspectionsComponent } from './components/inspections/inspections.component';
import { NspectComponent } from './components/nspect/nspect.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAyDhLAX9U1s-Z-OOedgRgsHSrebyEEZzo',
  authDomain: 'nspec-5d812.firebaseapp.com',
  databaseURL: 'https://nspec-5d812.firebaseio.com',
  storageBucket: 'nspec-5d812.appspot.com',
  messagingSenderId: '585105696761'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'properties', component:PropertiesComponent},
  {path: 'property/:id', component: PropertyComponent},
  {path: 'add-property', component:AddPropertyComponent},
  {path: 'inspect', component: InspectComponent},
  {path: 'inspections', component:InspectionsComponent},
  {path: 'inspect/:id', component: NspectComponent},
  {path: 'edit-property/:id', component: EditPropertyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertiesComponent,
    NavbarComponent,
    AddPropertyComponent,
    EditPropertyComponent,
    PropertyComponent,
    InspectComponent,
    InspectionsComponent,
    NspectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    FlashMessagesModule
  ],
  providers: [FirebaseService],

  bootstrap: [AppComponent]
})
export class AppModule { }
