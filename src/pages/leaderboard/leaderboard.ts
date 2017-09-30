import { TechnischerService } from './../../provider/technischer.service';
import { LeaderboardEntry } from './../../interfaces';
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
  public me: LeaderboardEntry = {
    id: '',
    name: '',
    atp: '',
    wp: '',
    rank: ''
  }
  public leaderboardType: string = 'Weekly';

  constructor(public navCtrl: NavController, private go: LetsGOService, public navParams: NavParams) {
    // this.leaderboardFriends = go.leaderboardFriends();
    // this.leaderboardWeekly = go.leaderboardWeekly();
    // this.leaderboardAlltime = go.leaderboardAlltime();

    // Daten holen
    this.go.leaderboard('weekly').subscribe((answer) => {
      console.log('Weekly', answer);
      this.leaderboardWeekly = answer.data.data;
      let entries: LeaderboardEntry[] = answer.data.data;
      entries.forEach(entry => {
        if (entry.name = go.user) {
          this.me = entry;
        }
      });
    },
    (err) => {console.error(err);});

    this.go.leaderboard('alltime').subscribe(answer => {
      console.log('Alltime', answer);
      this.leaderboardAlltime = answer.data.data;
    },
    (err) => {console.error(err);});

    this.go.leaderboard('friends').subscribe(answer => {
      console.log('Friends', answer);
      this.leaderboardFriends = answer.data.data;
    },
    (err) => {console.error(err);});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderboardPage');    
  }

  addFriend(id: string){
    console.log(id);
  }

}
