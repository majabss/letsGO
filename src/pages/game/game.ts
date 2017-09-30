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
        //this.board[i].push(PlayerTile.FREE);
        if(Math.random() < 0.5){
          this.board[i].push(PlayerTile.FREE);
        }else{
          if(Math.random() < 0.5){
            this.board[i].push(PlayerTile.BLACK);
          }else{
            this.board[i].push(PlayerTile.WHITE);
          }
        }
      }
    }
  }

  public setzen(i: number, j: number){
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

  public cancel(){
    
  }

  public send(){
    
  }

}
