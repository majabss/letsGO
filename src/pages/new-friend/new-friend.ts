import { LetsGOService } from './../../provider/letsGO.service';
import { LeaderboardEntry, Answer } from './../../interfaces';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  public friends: LeaderboardEntry[] = [];
  public aktFriend: LeaderboardEntry = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private goService: LetsGOService, public alertCtrl: AlertController) {
    this.addFriend('2');
    this.addFriend('3');
  }

  ionViewDidLoad() {
  }

  public search() {
    
  }

  public addFriend(userid: string) {
    this.goService.addFriend(userid).subscribe(
      (data: Answer) => {
        console.log(data);
        if (data.success) {
          this.getFriends()
        } else if (!data.success) {
          this.showAlert('Fehler', data.message);
        }
      }
    );
  }

  public getFriends() {
    this.goService.getFriends().subscribe(
      (data: Answer) => {
        console.log(data);
        if (data.success) {
          // this.friends = data.data.ranks.map((element) => { return element[  1]; });
          console.log('friends', data.data.ranks);
        } else if (!data.success) {
          this.showAlert('Fehler', data.message);
        }
      }
    );
  }

  public selectFriend(friend: LeaderboardEntry) {
    this.aktFriend = friend;
  }

  public isActive(friend: LeaderboardEntry) {
    return this.aktFriend == friend;
  }

  public showAlert(title: string, subTitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }
}
