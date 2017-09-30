import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public player = 'Spieler 1';
  public scoreWeek = 500;
  public scoreAlltime = 1000;

  public opponentName = 'Lars';
  public opponentScore = 5000;
  public gameStatus = 'blabla';

  constructor(public navCtrl: NavController) { }

}
