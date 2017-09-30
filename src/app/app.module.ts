import { Http, HttpModule } from '@angular/http';
import { TechnischerService } from './../provider/technischer.service';
import { LetsGOService } from './../provider/letsGO.service';
import { GamePage } from './../pages/game/game';
import { SettingsPage } from './../pages/settings/settings';
import { LoginPage } from './../pages/login/login';
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

export const BASEPATH = "h2726662.stratoserver.net";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LeaderboardPage,
    LoginPage,
    SettingsPage,
    GamePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    LoginPage,
    SettingsPage,
    GamePage
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
