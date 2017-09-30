import { GamePage } from './../game/game';
import { LetsGOService } from './../../provider/letsGO.service';
import { LeaderboardEntry } from './../../interfaces';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-game',
  templateUrl: 'new-game.html',
})
export class NewGamePage {

  public friends: LeaderboardEntry[];
  public friend: string;

  constructor(public navCtrl: NavController, private goService: LetsGOService, public navParams: NavParams) {
  
    this.friends = goService.leaderboardFriends().data.ranks;
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewGamePage');
  }

  public start(){
    this.navCtrl.push(GamePage);
  }

  public cancel() {
    this.navCtrl.pop();
  }

}
