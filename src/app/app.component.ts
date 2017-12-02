import { RegisterComponent } from './register/register.component';
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {NgForm} from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  title = 'app';
  first_name: string;
  last_name: string;
  e_mail: any;
  mobile_number: number;
  address: string;
  city: string;
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: any = '';
  r: any;
  constructor( public af: AngularFireDatabase) {
    this.items = af.list('/users');
}
Send() {
 /* this.items.push({
    'First  Name' : this.first_name,
    'Last Name': this.last_name,
    'Email Addres' : this.e_mail,
    'Phone Number' : this.mobile_number,
    'Addrress': this.address,
    'City': this.city

});*/
this.items.push({
  'first': this.first_name,
  'last': this.last_name,
  'email': this.e_mail,
  'phone': this.mobile_number,
  
});

}
}
