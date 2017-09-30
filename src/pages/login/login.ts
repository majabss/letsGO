import { Answer } from './../../interfaces';
import { LetsGOService } from './../../provider/letsGO.service';
import { TabsPage } from './../tabs/tabs';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

  /**
   * Variablen für die Registrierung
   */
  public regusername: string;
  public regemail: string;
  public regpassword: string;
  public regpwasswordconfirm: string;

  /**
   * Variablen für das Sign in
   */
  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public go: LetsGOService, public alertCtrl: AlertController) {  }

  public login() {
    if (this.username && this.username != '' && this.password && this.password != '') {
      let params = 'user=' + this.username + '&password=' + this.password;
      this.go.signin(params).subscribe(
        (data: Answer) => {
          console.log(data)
          if (data.success) {
            this.go.user = this.username;
            this.go.password = this.password;
            this.go.sessionKey = data.data.SessionKey;
            this.navCtrl.setRoot(TabsPage);
          } else if (!data.success) {
            this.showAlert('Fehler', data.message);
            this.username = null;
            this.password = null;
          }
        },
        (err) => {
          this.showAlert('Fehler', 'Uhhh.... gar nicht gut...Frag die Profis');
        }
      );      
    }
    // this.navCtrl.setRoot(TabsPage);
  }

  public signin(){
    this.clickLoginCard();
  }

  public signup() {
    let param = 'user=' + this.regusername + '&mail=' + this.regemail + '&password=' + this.regpassword + '&phone=1234';
    if (this.regpassword == this.regpwasswordconfirm) {
      this.go.reg(param).subscribe(
        (data: Answer) => {
          console.log(data);
          if (data.success) {
            this.clickLoginCard();
          } else if (!data.success) {
            this.showAlert('Fehler', data.message);
            this.regusername = null;
            this.regemail = null;
            this.regpassword = null;
            this.regpwasswordconfirm = null;
          }
        },
        (err) => {
          console.error(err);
          this.showAlert('Fehler', 'Uhhh.... gar nicht gut...Frag die Profis');
        }
      );
    } else {
      this.showAlert('Fehler', 'Die beiden Passwörter müssen schon gleich sein ...')
    }
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

  public showAlert(title: string, subTitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

}
