import { TechnischerService } from './../../provider/technischer.service';
import { LeaderboardEntry, Answer } from './../../interfaces';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  public meFriends: LeaderboardEntry = {
    id: '',
    name: '',
    atp: '',
    wp: '',
    rank: ''
  }
  public meWeekly: LeaderboardEntry = {
    id: '',
    name: '',
    atp: '',
    wp: '',
    rank: ''
  }  
  public meAlltime: LeaderboardEntry = {
    id: '',
    name: '',
    atp: '',
    wp: '',
    rank: ''
  }
  public leaderboardType: string = 'Weekly';

  constructor(public navCtrl: NavController, private go: LetsGOService, public navParams: NavParams, public alertCtrl: AlertController) {
    // this.leaderboardFriends = go.leaderboardFriends();
    // this.leaderboardWeekly = go.leaderboardWeekly();
    // this.leaderboardAlltime = go.leaderboardAlltime();

    // Daten holen
    this.go.leaderboard('weekly').subscribe((answer) => {
      console.log('Weekly', answer);
      this.leaderboardWeekly = answer.data.data;
      let entries: LeaderboardEntry[] = answer.data.data;
      entries.forEach(entry => {
        if (entry.name == go.user) {
          this.meWeekly = entry;
        }
      });
    },
    (err) => {console.error(err);});

    this.go.leaderboard('alltime').subscribe(answer => {
      console.log('Alltime', answer);
      this.leaderboardAlltime = answer.data.data;
      let entries: LeaderboardEntry[] = answer.data.data;
      entries.forEach(entry => {
        if (entry.name == go.user) {
          this.meAlltime = entry;
        }
      });
    },
    (err) => {console.error(err);});

    this.go.leaderboard('friends').subscribe(answer => {
      console.log('Friends', answer);
      this.leaderboardFriends = answer.data.data;
      let entries: LeaderboardEntry[] = answer.data.data;
      entries.forEach(entry => {
        if (entry.name == go.user) {
          this.meFriends = entry;
        }
      });
    },
    (err) => {console.error(err);});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderboardPage');    
  }

  addFriend(id: string){
    console.log(id);
  }

  removeFriendRequest(id: string){
    let confirm = this.alertCtrl.create({
      title: 'Remove?',
      message: 'Remove as friend?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Friend Remove No ' + id);
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Friend Remove Yes ' + id);
            this.go.removeFriend(id).subscribe(
              (data: Answer) => {
                console.log(data);
                if (data.success) {
                  this.showAlert('Successful!', data.message);
                } else if (!data.success) {
                  this.showAlert('Error', data.message);
                }
              }
            );
          }
        }
      ]
    });
    confirm.present();
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
