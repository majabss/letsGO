import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public declineInvitationsFromNotFriends: boolean;
  public pushNotifications: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.declineInvitationsFromNotFriends = false;
    this.pushNotifications = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
