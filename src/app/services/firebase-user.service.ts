import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUserService {

  constructor(private db: AngularFirestore) { }

  getPeople() {
    return  this.db.collection('users');
  }
}
