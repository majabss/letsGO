import { FieldResponse, FieldEntry, Answer } from './../../interfaces';
import { LetsGOService } from './../../provider/letsGO.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PlayerTile } from '../../interfaces';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})

export class GamePage {

  public board: PlayerTile[][];
  public wert: boolean;
  public boardSize: number;
  public tileWidthHeight: number;
  public gegner: string;
  public amzug: string;
  public zeit: string;
  public posX: number = -1;
  public posY: number = -1;
  public gameid: string;
  public ich: number;
  public amZug: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public go: LetsGOService, public alertCtrl: AlertController) {
    this.boardSize = navParams.data[1];
    this.tileWidthHeight = 255/this.boardSize;
    this.initBoard(this.boardSize);

    this.gameid = navParams.data[0];

    console.log("id", navParams.data[0]); //id
    console.log("fieldsize", navParams.data[1]); //fieldsize
    console.log("otherplayername", navParams.data[2]); //otherplayername
    console.log("playtime", navParams.data[3]); //playtime
    console.log("amZug", navParams.data[4]); //amZug

    this.amZug = navParams.data[4];

    this.gegner = navParams.data[2];
    if(this.amZug){
      this.amzug = "It's your turn.";
    }else{
      this.amzug = "It's " + this.gegner + " turn.";
    }
    this.zeit = navParams.data[3]+"h";
    
    this.go.field(this.gameid).subscribe(
      (response: FieldResponse) => {
        console.log("Field Response", response);
        
        this.ich = +response.data.IchBin;
        console.log("ich: ", this.ich);
        response.data.gamefield.forEach((entry: FieldEntry) => {
          this.board[entry.koordX][entry.koordY] = entry.status;
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ionViewDidLoad() {
    
  }

  public initBoard(boardSize: number) {
    this.board = [];

    for(var i: number = 0; i < boardSize; i++) {
      this.board[i] = [];
      for(var j: number = 0; j< boardSize; j++) {
        this.board[i].push(PlayerTile.FREE);
      }
    }
  }

  public setzen(i: number, j: number){
    if(this.amZug){
      if(this.board[i][j] == 0){
        if(this.posX != -1 && this.posY != -1){
          this.board[this.posX][this.posY] = PlayerTile.FREE;
        }
        this.posX = i;
        this.posY = j;
        this.board[this.posX][this.posY] = PlayerTile.GREEN;
      }
      this.wert = !this.wert;
    }
  }

  public cancel(){
    this.navCtrl.pop();
  }

  public send(){
    this.go.turn(this.gameid, this.posX, this.posY).subscribe(
      (answer: Answer) => {
        console.log(answer);
        if(answer.success){
          this.board[this.posX][this.posY] = this.ich;
          this.amZug = false;
          this.amzug = "It's " + this.gegner + " turn.";
        }
      },
      (err) => {
        console.log(err);
      });
  }

  
  public concede(){
    let confirm = this.alertCtrl.create({
      title: 'Concede?',
      message: 'Do you want to concede?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Concede No ' + this.gameid);
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Concede Yes ' + this.gameid);
            this.go.concede(this.gameid).subscribe(
              (data: Answer) => {
                console.log(data);
                if (data.success) {
                  this.showAlert('You conceded!', data.message);
                } else if (!data.success) {
                  this.showAlert('Error', data.message);
                }
              }
            );
            this.navCtrl.pop();
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
