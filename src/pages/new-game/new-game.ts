import { TabsPage } from './../tabs/tabs';
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

  public friends: LeaderboardEntry[] = [];
  public friend: string;
  public deadline: string;
  public size: string;

  constructor(public navCtrl: NavController, private go: LetsGOService, public navParams: NavParams) {
    this.go.leaderboard('friends').subscribe(answer => {
      console.log('Friends', answer);
      this.friends = answer.data.data;
    },
    (err) => {console.error(err);});  
  }

  ionViewDidLoad() {
  }

  public loadFriends() {
  }

  public start() {
    this.go.startGame(this.friend, this.deadline, this.size).subscribe(
      data => {console.log(data)},
      err => {console.error(err)}
    )
    this.navCtrl.pop();
  }

  public cancel() {
    this.navCtrl.pop();
  }

}
