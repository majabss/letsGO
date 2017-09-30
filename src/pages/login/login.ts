import { TabsPage } from './../tabs/tabs';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginVisible = true;
  public signinVisible = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public login() {
    this.navCtrl.setRoot(TabsPage);
    this.navCtrl.push(TabsPage);
  }

  public signin(){
    this.clickLoginCard();
  }

  public clickLoginCard() {
    this.loginVisible = !this.loginVisible;
    if (this.loginVisible) {
      this.signinVisible = false;
    }
  }

  public clickSigninCard() {
    this.signinVisible = !this.signinVisible;
    if (this.signinVisible) {
      this.loginVisible = false;
    }
  }

}
