import { LetsGOService } from './../../provider/letsGO.service';
import { LeaderboardEntry } from './../../interfaces';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-friend',
  templateUrl: 'new-friend.html',
})
export class NewFriendPage {
  public friends: LeaderboardEntry[];
  public aktFriend: LeaderboardEntry = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private goService: LetsGOService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewFriendPage');
  }

  search() {
    this.friends = this.goService.leaderboardFriends().data.ranks;
  }

  selectFriend(friend: LeaderboardEntry) {
    this.aktFriend = friend;
  }

  isActive(friend: LeaderboardEntry) {
    return this.aktFriend == friend;
  }

  addFriend() {

  }

}
