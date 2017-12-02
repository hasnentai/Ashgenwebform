import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';



import {FormsModule} from '@angular/forms';
const appRoutes: Routes = [
  { path: 'register',      component: RegisterComponent }
];
export const  config = {
  apiKey: "AIzaSyDjWaLY6eTwuKf5YgPoQgPzK6cA40axDbI",
  authDomain: "ashgen-737b9.firebaseapp.com",
  databaseURL: "https://ashgen-737b9.firebaseio.com",
  projectId: "ashgen-737b9",
  storageBucket: "ashgen-737b9.appspot.com",
  messagingSenderId: "57491185405"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFontAwesomeModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
