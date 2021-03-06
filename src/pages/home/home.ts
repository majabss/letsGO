import { GamePage } from './../game/game';
import { Answer, HomeScreenData } from './../../interfaces';
import { LetsGOService } from './../../provider/letsGO.service';
import { NewFriendPage } from './../new-friend/new-friend';
import { NewGamePage } from './../new-game/new-game';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public player: string;
  public scoreWeek: string;
  public scoreAlltime: string;

  public opponentName = 'Lars';
  public opponentScore = 5000;
  public gameStatus = 'blabla';

  public allData: HomeScreenData = {};

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams, public go: LetsGOService, public alertCtrl: AlertController) {
    setInterval(() => this.loadHomeScreen(this.go), 5000);
  }

  ionViewDidLoad() {
    this.loadHomeScreen(this.go);
    this.player = this.go.user;
  }

  ionViewWillEnter() {
    this.loadHomeScreen(this.go);
  }

  public loadHomeScreen(goInstance: LetsGOService, refresher?: any) {
    goInstance.loadHomePageData().subscribe(
      (answer: Answer) => {
        this.allData = answer.data;
        this.scoreAlltime = this.allData.alltimepoints;
        this.scoreWeek = this.allData.weeklypoints;
        console.log('LoadHomePageData', this.allData);
      },
      (err) => {
        console.log(err);
      }
    );
    if (refresher) {
      setTimeout(() => {
        refresher.complete();
      }, 2000);
    }
  }

  public playGame(id: string, fieldsize: string, otherplayername: string, playtime: string, amZug: boolean){
    this.navCtrl.push(GamePage, [id, fieldsize, otherplayername, playtime, amZug]);
  }

  public reactToInvitation(id: string){
    let confirm = this.alertCtrl.create({
      title: 'Invitation',
      message: 'Do you want to accept the invitation?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree ' + id);
            this.decline(id);
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree ' + id);
            this.accept(id);
          }
        }
      ]
    });
    confirm.present();
  }

  public accept(id: string){
    this.go.accept(id).subscribe(
      (answer: Answer) => {
        if (answer.success == false) {
          console.log(answer);
        }
      },
      (err) => {
        console.log(err);
      });
  }

  public decline(id: string){
    this.go.decline(id).subscribe(
      (answer: Answer) => {
        if(answer.success == false){
          console.log(answer);
        }
      },
      (err) => {
        console.log(err);
      });
  }

  public newGame() {
    this.app.getRootNav().push(NewGamePage);
  }

  public newFriend() {
    this.app.getRootNav().push(NewFriendPage);
  }

  public keepAliveThread() {
    if (this.go) {
      this.go.keepAlive().subscribe(
        (answer: Answer) => {
          console.log('keep Alive', answer);
          if (answer.success) {
  
          } else if (!answer.success) {
            this.showAlert('Error', answer.message);
          }
        }
      );
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
