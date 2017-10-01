import { LetsGOService } from './../../provider/letsGO.service';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

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

  /**
   * Defines whether the user wants to decline all invitations except from friends
   */
  public declineInvitationsFromNotFriends: boolean;
  /**
   * Defines whether Push Notifications are enabled
   */
  public pushNotifications: boolean;

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams, public go: LetsGOService) {
    this.declineInvitationsFromNotFriends = false;
    this.pushNotifications = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  /**
   * Calls Log out 
   */
  public signout() {
    this.app.getRootNav().setRoot(LoginPage);
    // this.navCtrl.setRoot(LoginPage);
  }

  /**
   * Calls Save
   */
  public save() {
    console.log('save');
  }
}
