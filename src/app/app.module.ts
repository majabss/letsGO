import { NewFriendPage } from './../pages/new-friend/new-friend';
import { NewGamePage } from './../pages/new-game/new-game';
import { Http, HttpModule } from '@angular/http';
import { TechnischerService } from './../provider/technischer.service';
import { LetsGOService } from './../provider/letsGO.service';
import { ComponentsModule } from './../components/components.module';
import { LoginPageModule } from './../pages/login/login.module';
import { GamePage } from './../pages/game/game';
import { SettingsPage } from './../pages/settings/settings';
import { LeaderboardPage } from './../pages/leaderboard/leaderboard';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// export const BASEPATH = "h2726662.stratoserver.net";
export const BASEPATH = 'http://172.16.2.131:8080';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LeaderboardPage,
    SettingsPage,
    GamePage,
    NewGamePage,
    NewFriendPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LeaderboardPage,
    SettingsPage,
    GamePage,
    NewGamePage,
    NewFriendPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TechnischerService,
    LetsGOService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]

})
export class AppModule {}

export function showAlert(title: string, subTitle: string) {
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: subTitle,
    buttons: ['OK']
  });
  alert.present();
}