import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewFriendPage } from './new-friend';

@NgModule({
  declarations: [
    NewFriendPage,
  ],
  imports: [
    IonicPageModule.forChild(NewFriendPage),
  ],
})
export class NewFriendPageModule {}
