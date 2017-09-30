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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.boardSize = 9;
    this.tileWidthHeight = 255/this.boardSize;
    this.initBoard(this.boardSize);

    this.gegner = "Test";
    this.amzug = "Du";
    this.zeit = "10h";
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
    if(this.wert){
      this.board[i][j] = PlayerTile.BLACK;
    }else{
      this.board[i][j] = PlayerTile.WHITE;
    }
    this.wert = !this.wert;
  }

  public cancel(){
    
  }

  public send(){
    
  }

}
