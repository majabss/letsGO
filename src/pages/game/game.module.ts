import { MycanvasComponent } from './../../components/mycanvas/mycanvas';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamePage } from './game';

@NgModule({
  declarations: [
    GamePage,
  ],
  imports: [
    IonicPageModule.forChild(GamePage),
    MycanvasComponent
  ],
})

export class GamePageModule {}
