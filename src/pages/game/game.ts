import { FieldResponse, FieldEntry, Answer } from './../../interfaces';
import { LetsGOService } from './../../provider/letsGO.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public go: LetsGOService) {
    this.boardSize = 9;
    this.tileWidthHeight = 255/this.boardSize;
    this.initBoard(this.boardSize);

    console.log(navParams.data[0]);
    console.log(navParams.data[1]);
    console.log(navParams.data[2]);
    console.log(navParams.data[3]);

    this.amZug = true;

    this.gegner = "lars";
    if(this.amZug){
      this.amzug = "It's your turn.";
    }else{
      this.amzug = "It's " + this.gegner + " turn.";
    }
    this.zeit = "24";

    console.log(navParams);
    
    this.gameid = navParams.data;
    // this.gegner = navParams.get('name');
    //let amZug: string = navParams.get('amZug');
    // this.zeit = navParams.get('zeit');

    this.go.field(this.gameid).subscribe(
      (response: FieldResponse) => {
        console.log(response);
        
        this.ich = +response.data.IchBin;
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
        }
      },
      (err) => {
        console.log(err);
      });
  }

}
