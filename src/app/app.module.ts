import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { ChatroomComponent } from './chatroom/chatroom.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UsersListComponent,
    UserComponent,
    NavbarComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
