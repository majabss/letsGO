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
  public friends: any[] = [];
  public aktFriend: any = null;
  public search: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private goService: LetsGOService, public alertCtrl: AlertController) { }

  ionViewDidLoad() {
  }

  public searchFriends() {
    if (this.search && this.search != '') {
      this.goService.searchFriends(this.search).subscribe(
        (answer: Answer) => {
          if (answer.success) {
            this.friends = answer.data.data;
            console.log(this.friends);
          } else if (!answer.success) {
            this.showAlert('Fehler', answer.message);
          }
        }
      );
    }
  }

  public addFriend() {
    this.goService.addFriend(this.aktFriend.id).subscribe(
      (data: Answer) => {
        console.log(data);
        if (data.success) {
          console.log(data);
        } else if (!data.success) {
          this.showAlert('Fehler', data.message);
        }
      }
    );
  }

  public selectFriend(friend: any) {
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
