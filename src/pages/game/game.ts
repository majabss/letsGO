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

  public board: Array<PlayerTile[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initBoard(13);
  }

  ionViewDidLoad() {
  }

  public initBoard(boardSize: number) {
    // this.board = new Array();
    // for (let i = 0; i < boardSize; i++) {
    //   this.board[i] = new Array<PlayerTile>(boardSize);
    //   for (var j = 0; i < boardSize; i++) {
    //     this.board[i][j] = PlayerTile.FREE;
    //   }
    // }

    this.board = [
      [PlayerTile.FREE, PlayerTile.FREE, PlayerTile.FREE],
      [PlayerTile.FREE, PlayerTile.FREE, PlayerTile.FREE],
      [PlayerTile.FREE, PlayerTile.FREE, PlayerTile.FREE],
      [PlayerTile.FREE, PlayerTile.FREE, PlayerTile.FREE]
    ];
    console.log('board', this.board);
  }

}
