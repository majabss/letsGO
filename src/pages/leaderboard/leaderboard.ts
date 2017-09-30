import { TechnischerService } from './../../provider/technischer.service';
import { LeaderboardResponse, LeaderboardEntry } from './../../interfaces';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LetsGOService} from './../../provider/letsGO.service';

/**
 * Generated class for the LeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html',
})
export class LeaderboardPage {

  public leaderboardFriends: LeaderboardEntry[] = [];
  public leaderboardWeekly: LeaderboardEntry[] = [];
  public leaderboardAlltime: LeaderboardEntry[] = [];
  public leaderboardType: string;

  constructor(public navCtrl: NavController, private go: LetsGOService, public navParams: NavParams) {
    // Initialisierung
    this.leaderboardType = 'Weekly';

    // this.leaderboardFriends = go.leaderboardFriends();
    // this.leaderboardWeekly = go.leaderboardWeekly();
    // this.leaderboardAlltime = go.leaderboardAlltime();

    // Daten holen
    this.go.leaderboard('weekly').subscribe(data => {
      this.leaderboardWeekly = data.data.ranks;
      console.log(data);
    },
    (err) => { 
      console.error(err);
    });

    this.go.leaderboard('alltime').subscribe(data => {
      this.leaderboardAlltime = data.data.ranks;
      console.log(data);
    },
    (err) => { 
      console.error(err);
    });

    this.go.leaderboard('friends').subscribe(data => {
      this.leaderboardFriends = data.data.ranks;
      console.log(data);
    },
    (err) => { 
      console.error(err);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderboardPage');    
  }

  addFriend(id: string){
    console.log(id);
  }

}
