import { TechnischerService } from './../../provider/technischer.service';
import { LeaderboardResponse } from './../../interfaces';
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

  public leaderboardWeekly: LeaderboardResponse;
  
  constructor(public navCtrl: NavController, private goService: LetsGOService, public navParams: NavParams) {

    this.leaderboardWeekly = goService.leaderboardWeekly();

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderboardPage');

    
  }

}
