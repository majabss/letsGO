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
  }
  
  ionViewDidLoad() {
    this.loadHomeScreen();
    this.player = this.go.user;
  }

  public loadHomeScreen() {
    this.go.loadHomePageData().subscribe(
      (answer: Answer) => {
        this.allData = answer.data;
        this.scoreAlltime = this.allData.alltimepoints;
        this.scoreWeek = this.allData.weeklypoints;
        console.log('answer', this.allData);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public playGame(id: string){
    this.navCtrl.push(GamePage, id);
  }

  public invitation(id: string){
    let confirm = this.alertCtrl.create({
      title: 'Invitation',
      message: 'Do you want to accept the invitation?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree ' + id);
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree '  + id);
          }
        }
      ]
    });
    confirm.present();
  } 

  public accept(id: string){
    this.go.accept(id).subscribe(
      (answer: Answer) => {
        if(answer.success == false){
          console.log(answer);
        }
      },
      (err) => {
        console.log(err);
      });
  }

  public decline(id: string){

  }

  public newGame() {
    this.app.getRootNav().push(NewGamePage);
  }

  public newFriend() {
    this.app.getRootNav().push(NewFriendPage);
  }

}
