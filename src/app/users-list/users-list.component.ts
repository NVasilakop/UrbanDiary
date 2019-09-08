import { Component, OnInit } from '@angular/core';
import {FirebaseUserService} from '../services/firebase-user.service';
import { Observable } from 'rxjs';
import {User} from '../models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  items: Array<User> = [];
  constructor(public firebaseService: FirebaseUserService) {
  }

  ngOnInit() {
   this.firebaseService.getPeople().get().subscribe(doc => { doc.docs.forEach(dockie => {
    // console.log(dockie.data() as User);
    this.items.push(dockie.data() as User);
    // console.log(this.items);
  });
});
  } }
