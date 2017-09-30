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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initBoard(9);
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
    this.board[i][j] = PlayerTile.BLACK;
  }

}
