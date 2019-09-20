import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  ngOnInit() {
  }
  constructor(public afAuth: AngularFireAuth) {
    // this.afAuth.authState
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
