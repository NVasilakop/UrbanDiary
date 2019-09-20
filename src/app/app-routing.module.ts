import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChatroomComponent } from './chatroom/chatroom.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'chat', component : ChatroomComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
